import { Contract } from 'npm:ethers@5.7.2';
import arbitrumOne_buffer_abi from '../../../eth-sdk/abis/arbitrumOne/buffer.json' assert {type: 'json'}
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getArbitrumOneSdk(defaultSignerOrProvider) {
    return {
        "buffer": getContract('0x0e0A1241C9cE6649d5D30134a194BA3E24130305', arbitrumOne_buffer_abi, defaultSignerOrProvider),
    };
}
