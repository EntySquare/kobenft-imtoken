import Web3 from 'web3';
// import { defaultEthereumConfig, EthereumConfig } from '../config';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

export function web3ProviderFrom(endpoint: string, config?: EthereumConfig): any {
    const ethConfig = Object.assign(defaultEthereumConfig, config || {});

    const providerClass = endpoint.includes('wss')
        ? Web3.providers.WebsocketProvider
        : Web3.providers.HttpProvider;

    return new providerClass(endpoint, {
        timeout: ethConfig.ethereumNodeTimeout,
    });
}

export function balanceToDecimal(balance: BigNumber): number {
    return Number(formatUnits(balance.toString()));
}

export function decimalToBalance(d: string | number, decimals = 18): BigNumber {
    return parseUnits(String(d), decimals);
}
export type EthereumConfig = {
    testing: boolean,
    autoGasMultiplier: number,
    defaultConfirmations: number,
    defaultGas: string,
    defaultGasPrice: string,
    ethereumNodeTimeout: number,
};

export const defaultEthereumConfig = {
    testing: false,
    autoGasMultiplier: 1.5,
    defaultConfirmations: 1,
    defaultGas: "6000000",
    defaultGasPrice: "1000000000000",
    ethereumNodeTimeout: 10000,
};
