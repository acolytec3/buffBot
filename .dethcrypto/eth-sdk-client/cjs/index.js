"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArbitrumOneSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const buffer_json_1 = __importDefault(require("../../../../eth-sdk/abis/arbitrumOne/buffer.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getArbitrumOneSdk(defaultSignerOrProvider) {
    return {
        "buffer": getContract('0x0e0A1241C9cE6649d5D30134a194BA3E24130305', buffer_json_1.default, defaultSignerOrProvider),
    };
}
exports.getArbitrumOneSdk = getArbitrumOneSdk;
