import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IBufferRouter {
    type OpenTradeParamsStruct = {
        queueId: PromiseOrValue<BigNumberish>;
        timestamp: PromiseOrValue<BigNumberish>;
        price: PromiseOrValue<BigNumberish>;
        signature: PromiseOrValue<BytesLike>;
    };
    type OpenTradeParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        queueId: BigNumber;
        timestamp: BigNumber;
        price: BigNumber;
        signature: string;
    };
    type CloseTradeParamsStruct = {
        optionId: PromiseOrValue<BigNumberish>;
        targetContract: PromiseOrValue<string>;
        expiryTimestamp: PromiseOrValue<BigNumberish>;
        priceAtExpiry: PromiseOrValue<BigNumberish>;
        signature: PromiseOrValue<BytesLike>;
    };
    type CloseTradeParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        optionId: BigNumber;
        targetContract: string;
        expiryTimestamp: BigNumber;
        priceAtExpiry: BigNumber;
        signature: string;
    };
}
export interface BufferInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "cancelQueuedTrade(uint256)": FunctionFragment;
        "contractRegistry(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initiateTrade(uint256,uint256,bool,address,uint256,uint256,bool,string,uint256)": FunctionFragment;
        "isInPrivateKeeperMode()": FunctionFragment;
        "isKeeper(address)": FunctionFragment;
        "nextQueueId()": FunctionFragment;
        "publisher()": FunctionFragment;
        "queuedTrades(uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "resolveQueuedTrades((uint256,uint256,uint256,bytes)[])": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setContractRegistry(address,bool)": FunctionFragment;
        "setInPrivateKeeperMode()": FunctionFragment;
        "setKeeper(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unlockOptions((uint256,address,uint256,uint256,bytes)[])": FunctionFragment;
        "userCancelledQueueCount(address)": FunctionFragment;
        "userCancelledQueuedIds(address,uint256)": FunctionFragment;
        "userQueueCount(address)": FunctionFragment;
        "userQueuedIds(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "cancelQueuedTrade" | "contractRegistry" | "getRoleAdmin" | "grantRole" | "hasRole" | "initiateTrade" | "isInPrivateKeeperMode" | "isKeeper" | "nextQueueId" | "publisher" | "queuedTrades" | "renounceRole" | "resolveQueuedTrades" | "revokeRole" | "setContractRegistry" | "setInPrivateKeeperMode" | "setKeeper" | "supportsInterface" | "unlockOptions" | "userCancelledQueueCount" | "userCancelledQueuedIds" | "userQueueCount" | "userQueuedIds"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelQueuedTrade", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "contractRegistry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initiateTrade", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isInPrivateKeeperMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "isKeeper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nextQueueId", values?: undefined): string;
    encodeFunctionData(functionFragment: "publisher", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedTrades", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resolveQueuedTrades", values: [IBufferRouter.OpenTradeParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setContractRegistry", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setInPrivateKeeperMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "setKeeper", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "unlockOptions", values: [IBufferRouter.CloseTradeParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "userCancelledQueueCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userCancelledQueuedIds", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userQueueCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userQueuedIds", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelQueuedTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiateTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInPrivateKeeperMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextQueueId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publisher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTrades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveQueuedTrades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInPrivateKeeperMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userCancelledQueueCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userCancelledQueuedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userQueueCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userQueuedIds", data: BytesLike): Result;
    events: {
        "CancelTrade(address,uint256,string)": EventFragment;
        "FailResolve(uint256,string)": EventFragment;
        "FailUnlock(uint256,string)": EventFragment;
        "InitiateTrade(address,uint256,uint256)": EventFragment;
        "OpenTrade(address,uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CancelTrade"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FailResolve"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FailUnlock"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitiateTrade"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenTrade"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface CancelTradeEventObject {
    account: string;
    queueId: BigNumber;
    reason: string;
}
export declare type CancelTradeEvent = TypedEvent<[
    string,
    BigNumber,
    string
], CancelTradeEventObject>;
export declare type CancelTradeEventFilter = TypedEventFilter<CancelTradeEvent>;
export interface FailResolveEventObject {
    queueId: BigNumber;
    reason: string;
}
export declare type FailResolveEvent = TypedEvent<[
    BigNumber,
    string
], FailResolveEventObject>;
export declare type FailResolveEventFilter = TypedEventFilter<FailResolveEvent>;
export interface FailUnlockEventObject {
    optionId: BigNumber;
    reason: string;
}
export declare type FailUnlockEvent = TypedEvent<[
    BigNumber,
    string
], FailUnlockEventObject>;
export declare type FailUnlockEventFilter = TypedEventFilter<FailUnlockEvent>;
export interface InitiateTradeEventObject {
    account: string;
    queueId: BigNumber;
    queuedTime: BigNumber;
}
export declare type InitiateTradeEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], InitiateTradeEventObject>;
export declare type InitiateTradeEventFilter = TypedEventFilter<InitiateTradeEvent>;
export interface OpenTradeEventObject {
    account: string;
    queueId: BigNumber;
    optionId: BigNumber;
}
export declare type OpenTradeEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], OpenTradeEventObject>;
export declare type OpenTradeEventFilter = TypedEventFilter<OpenTradeEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface Buffer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BufferInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        cancelQueuedTrade(queueId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        contractRegistry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initiateTrade(totalFee: PromiseOrValue<BigNumberish>, period: PromiseOrValue<BigNumberish>, isAbove: PromiseOrValue<boolean>, targetContract: PromiseOrValue<string>, expectedStrike: PromiseOrValue<BigNumberish>, slippage: PromiseOrValue<BigNumberish>, allowPartialFill: PromiseOrValue<boolean>, referralCode: PromiseOrValue<string>, traderNFTId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isInPrivateKeeperMode(overrides?: CallOverrides): Promise<[boolean]>;
        isKeeper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        nextQueueId(overrides?: CallOverrides): Promise<[BigNumber]>;
        publisher(overrides?: CallOverrides): Promise<[string]>;
        queuedTrades(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            boolean,
            string,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            boolean,
            string,
            BigNumber
        ] & {
            queueId: BigNumber;
            userQueueIndex: BigNumber;
            user: string;
            totalFee: BigNumber;
            period: BigNumber;
            isAbove: boolean;
            targetContract: string;
            expectedStrike: BigNumber;
            slippage: BigNumber;
            allowPartialFill: boolean;
            queuedTime: BigNumber;
            isQueued: boolean;
            referralCode: string;
            traderNFTId: BigNumber;
        }>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolveQueuedTrades(params: IBufferRouter.OpenTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setContractRegistry(targetContract: PromiseOrValue<string>, register: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInPrivateKeeperMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setKeeper(_keeper: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        unlockOptions(optionData: IBufferRouter.CloseTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userCancelledQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userCancelledQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    cancelQueuedTrade(queueId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    contractRegistry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initiateTrade(totalFee: PromiseOrValue<BigNumberish>, period: PromiseOrValue<BigNumberish>, isAbove: PromiseOrValue<boolean>, targetContract: PromiseOrValue<string>, expectedStrike: PromiseOrValue<BigNumberish>, slippage: PromiseOrValue<BigNumberish>, allowPartialFill: PromiseOrValue<boolean>, referralCode: PromiseOrValue<string>, traderNFTId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isInPrivateKeeperMode(overrides?: CallOverrides): Promise<boolean>;
    isKeeper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    nextQueueId(overrides?: CallOverrides): Promise<BigNumber>;
    publisher(overrides?: CallOverrides): Promise<string>;
    queuedTrades(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        boolean,
        string,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        string,
        BigNumber
    ] & {
        queueId: BigNumber;
        userQueueIndex: BigNumber;
        user: string;
        totalFee: BigNumber;
        period: BigNumber;
        isAbove: boolean;
        targetContract: string;
        expectedStrike: BigNumber;
        slippage: BigNumber;
        allowPartialFill: boolean;
        queuedTime: BigNumber;
        isQueued: boolean;
        referralCode: string;
        traderNFTId: BigNumber;
    }>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolveQueuedTrades(params: IBufferRouter.OpenTradeParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setContractRegistry(targetContract: PromiseOrValue<string>, register: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInPrivateKeeperMode(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setKeeper(_keeper: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    unlockOptions(optionData: IBufferRouter.CloseTradeParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userCancelledQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    userCancelledQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    userQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    userQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        cancelQueuedTrade(queueId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        contractRegistry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initiateTrade(totalFee: PromiseOrValue<BigNumberish>, period: PromiseOrValue<BigNumberish>, isAbove: PromiseOrValue<boolean>, targetContract: PromiseOrValue<string>, expectedStrike: PromiseOrValue<BigNumberish>, slippage: PromiseOrValue<BigNumberish>, allowPartialFill: PromiseOrValue<boolean>, referralCode: PromiseOrValue<string>, traderNFTId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isInPrivateKeeperMode(overrides?: CallOverrides): Promise<boolean>;
        isKeeper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        nextQueueId(overrides?: CallOverrides): Promise<BigNumber>;
        publisher(overrides?: CallOverrides): Promise<string>;
        queuedTrades(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            boolean,
            string,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            boolean,
            string,
            BigNumber
        ] & {
            queueId: BigNumber;
            userQueueIndex: BigNumber;
            user: string;
            totalFee: BigNumber;
            period: BigNumber;
            isAbove: boolean;
            targetContract: string;
            expectedStrike: BigNumber;
            slippage: BigNumber;
            allowPartialFill: boolean;
            queuedTime: BigNumber;
            isQueued: boolean;
            referralCode: string;
            traderNFTId: BigNumber;
        }>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        resolveQueuedTrades(params: IBufferRouter.OpenTradeParamsStruct[], overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setContractRegistry(targetContract: PromiseOrValue<string>, register: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setInPrivateKeeperMode(overrides?: CallOverrides): Promise<void>;
        setKeeper(_keeper: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        unlockOptions(optionData: IBufferRouter.CloseTradeParamsStruct[], overrides?: CallOverrides): Promise<void>;
        userCancelledQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userCancelledQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        userQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CancelTrade(address,uint256,string)"(account?: PromiseOrValue<string> | null, queueId?: null, reason?: null): CancelTradeEventFilter;
        CancelTrade(account?: PromiseOrValue<string> | null, queueId?: null, reason?: null): CancelTradeEventFilter;
        "FailResolve(uint256,string)"(queueId?: null, reason?: null): FailResolveEventFilter;
        FailResolve(queueId?: null, reason?: null): FailResolveEventFilter;
        "FailUnlock(uint256,string)"(optionId?: null, reason?: null): FailUnlockEventFilter;
        FailUnlock(optionId?: null, reason?: null): FailUnlockEventFilter;
        "InitiateTrade(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, queueId?: null, queuedTime?: null): InitiateTradeEventFilter;
        InitiateTrade(account?: PromiseOrValue<string> | null, queueId?: null, queuedTime?: null): InitiateTradeEventFilter;
        "OpenTrade(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, queueId?: null, optionId?: null): OpenTradeEventFilter;
        OpenTrade(account?: PromiseOrValue<string> | null, queueId?: null, optionId?: null): OpenTradeEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        cancelQueuedTrade(queueId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        contractRegistry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initiateTrade(totalFee: PromiseOrValue<BigNumberish>, period: PromiseOrValue<BigNumberish>, isAbove: PromiseOrValue<boolean>, targetContract: PromiseOrValue<string>, expectedStrike: PromiseOrValue<BigNumberish>, slippage: PromiseOrValue<BigNumberish>, allowPartialFill: PromiseOrValue<boolean>, referralCode: PromiseOrValue<string>, traderNFTId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isInPrivateKeeperMode(overrides?: CallOverrides): Promise<BigNumber>;
        isKeeper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nextQueueId(overrides?: CallOverrides): Promise<BigNumber>;
        publisher(overrides?: CallOverrides): Promise<BigNumber>;
        queuedTrades(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolveQueuedTrades(params: IBufferRouter.OpenTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setContractRegistry(targetContract: PromiseOrValue<string>, register: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInPrivateKeeperMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setKeeper(_keeper: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        unlockOptions(optionData: IBufferRouter.CloseTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userCancelledQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userCancelledQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        userQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelQueuedTrade(queueId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        contractRegistry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initiateTrade(totalFee: PromiseOrValue<BigNumberish>, period: PromiseOrValue<BigNumberish>, isAbove: PromiseOrValue<boolean>, targetContract: PromiseOrValue<string>, expectedStrike: PromiseOrValue<BigNumberish>, slippage: PromiseOrValue<BigNumberish>, allowPartialFill: PromiseOrValue<boolean>, referralCode: PromiseOrValue<string>, traderNFTId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isInPrivateKeeperMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isKeeper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextQueueId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publisher(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedTrades(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolveQueuedTrades(params: IBufferRouter.OpenTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setContractRegistry(targetContract: PromiseOrValue<string>, register: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInPrivateKeeperMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setKeeper(_keeper: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockOptions(optionData: IBufferRouter.CloseTradeParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userCancelledQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userCancelledQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userQueueCount(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userQueuedIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
