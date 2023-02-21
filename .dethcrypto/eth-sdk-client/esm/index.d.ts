import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export declare type ArbitrumOneSdk = ReturnType<typeof getArbitrumOneSdk>;
export declare function getArbitrumOneSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    buffer: types.arbitrumOne.Buffer;
};
