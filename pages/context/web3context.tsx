import React, { ReactChild, createContext, useContext } from "react";
import { useWeb3 } from "../hooks/web3-client";
import { Web3ProviderState, web3InitialState } from "../reducers/web3-provider";

const Web3Context = createContext<Web3ProviderState>(web3InitialState);

interface Props {
  children: React.ReactNode;
}

export const Web3ContextProvider = ({ children }: Props) => {
  const web3ProviderState = useWeb3();

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  );
};

export function useWeb3Context() {
  return useContext(Web3Context);
}

export default function theWeb3Context() {
  return "hi theWeb3Context";
}
