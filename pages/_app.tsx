import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
console.log('NEXT_PUBLIC_DYNAMIC_ID:', process.env.NEXT_PUBLIC_DYNAMIC_ID);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ID || '',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}
