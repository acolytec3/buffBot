import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { getArbitrumOneSdk } from "./.dethcrypto/eth-sdk-client/esm/index.js";
import { ethers } from "npm:ethers@5.7.2";
import type { Buffer } from "./.dethcrypto/eth-sdk-client/esm/types/arbitrumOne/Buffer.d.ts";
const provider = new ethers.providers.EtherscanProvider(
  "arbitrum",
  Deno.env.get("ALCHEMYKEY")
);
const signer = new ethers.Wallet(Deno.env.get("KEY")!, provider);
const accessToken = Deno.env.get("ACCESSTOKEN");
type Order = {
  pair: string;
  price: string;
  direction: string;
  accessToken?: string;
};

const pairs = {
  ETHUSD: "0x89dd9ba4d290045211a6ce597a98181c7f9d899d",
  BTCUSD: "0x532321e6a2d8a54cf87e34850a7d55466b1ec197",
  ETHBTC: "0x5d6f1d376e5ea088532ae03dbe8f46177c42b814",
  LINKUSD: "0xd384131b8697f28e8505cc24e1e405962b88b21f",
  EURUSD: "0xbcd52d37f41da2277af92617d70931a787f66fd5",
  GBPUSD: "0x5d61fe708c9d41acf59009013f14496d559aad09",
  AUDUSD: "0x63e0af4ec5af8d103c1fb2ab606bd938d3dd27da",
  USDJPY: "0xa51696a6b909314ce0fb66d180d3f05c21804234",
  EURGBP: "0x7b5e6b8ae5840f5e78f79689b29c441b90803cb0",
  EURJPY: "0x6c42ce8098ef47a9e2171d931e89f0fb9ff0465d",
};

export const makeTrade = async (req: Request): Promise<Response> => {
  const trade = (await req.json()) as Order;
  if (accessToken && trade.accessToken !== accessToken) {
    // If an accessToken is provided, verify access token before processing trade
    return new Response(undefined, { status: 401 });
  }

  //@ts-ignore because I'm lazy and eth-sdk doesn't play nice with Deno
  const buffer: Buffer = getArbitrumOneSdk(signer).buffer;
  let contract = "";

  switch (trade.pair) {
    case "ETHUSD":
      contract = pairs.ETHUSD;
      break;
    case "BTCUSD":
      contract = pairs.BTCUSD;
      break;
    case "ETHBTC":
      contract = pairs.ETHBTC;
      break;
    case "LINKUSD":
      contract = pairs.LINKUSD;
      break;
    case "EURUSD":
      contract = pairs.EURUSD;
      break;
    case "EURBGP":
      contract = pairs.EURGBP;
      break;
    case "EURJPY":
      contract = pairs.EURJPY;
      break;
    case "GBPUSD":
      contract = pairs.GBPUSD;
      break;
    case "AUDUSD":
      contract = pairs.AUDUSD;
      break;
    case "USDJPY":
      contract = pairs.USDJPY;
      break;
    default:
      "";
  }

  try {
    const gas = await buffer.estimateGas.initiateTrade(
      "1000000",
      "300",
      trade.direction === "above",
      contract,
      parseFloat(trade.price) * 10 ** 8,
      "50",
      true,
      "",
      0
    );

    const gasPrice = await provider.getGasPrice();
    const nonce = await provider.getTransactionCount(signer.address);
    const tradeRes = await buffer.estimateGas.initiateTrade(
      "1000000", // Trade value is 1 USDC
      "300", // Timelimit is 5 minutes (5 * 60 seconds)
      trade.direction === "above", // Trade is "long" if alert from TV is "above", otherwise "short"
      contract, // Matched to the pair from TV alert
      parseFloat(trade.price) * 10 ** 8, // Current price times 10^8 - Contract uses 8 decimal places
      "50", // Slippage (defaults to 50 bips like web ui)
      true, // Allow partial fill
      "", // Referral code -- defaults to blank
      0, // Optopi token ID -- we default to 0 but you could check in the contract
      {
        gasLimit: gas.add(100000),
        maxFeePerGas: gasPrice,
        maxPriorityFeePerGas: ethers.BigNumber.from(1),
        nonce: nonce,
      }
    );
    console.log(tradeRes);
  } catch (err) {
    console.log(err);
  }
  return new Response(undefined, { statusText: "We okay", status: 200 });
};
