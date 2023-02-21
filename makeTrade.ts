import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { getArbitrumOneSdk } from "./.dethcrypto/eth-sdk-client/esm/index.js";
import { ethers } from "npm:ethers@5.7.2";
import config from "./config.json" assert { type: "json" };
import type { Buffer } from "./.dethcrypto/eth-sdk-client/esm/types/arbitrumOne/Buffer.d.ts";
const provider = new ethers.providers.EtherscanProvider(
  "arbitrum",
  config.alchemyKey
);
const signer = new ethers.Wallet(config.key, provider);
type Order = {
  pair: string;
  price: string;
  direction: string;
};

const pairs = {
  ETHUSD: "0x89dd9ba4d290045211a6ce597a98181c7f9d899d",
};

export const makeTrade = async (req: Request): Promise<Response> => {
  const trade = (await req.json()) as Order; //@ts-ignore
  const buffer: Buffer = getArbitrumOneSdk(signer).buffer;
  let contract = "";

  switch (trade.pair) {
    case "ETHUSD":
      contract = pairs.ETHUSD;
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
      const nonce = await provider.getTransactionCount(signer.address)
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
          nonce: nonce
        }
      );
      console.log(tradeRes);
  } catch (err) {
    console.log(err);
  }
  return new Response(undefined, { statusText: "We okay", status: 200 });
};
