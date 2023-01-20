import React from 'react';
import {JsonRpcSigner, Web3Provider} from '@ethersproject/providers';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import Web3Modal from 'web3modal';

type SignerContextType = {
  signer?: JsonRpcSigner;
  address?: string;
  loading: boolean;
  connectWallet: () => Promise<void>;
};

const SignerContext = createContext<SignerContextType>({} as any);

const useSignerContext = () => useContext(SignerContext);

export const SignerContextProvider = ({children}: {children: ReactNode}) => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const web3modal = new Web3Modal();
    // if (web3modal.cachedProvider) {
    //   connectWallet();
    // }
    // window.ethereum.on('accountsChanged', connectWallet);
  }, []);

  const connectWallet = async () => {
    setLoading(true);
    try {
      const web3modal = new Web3Modal({cacheProvider: true});
      const instance = await web3modal.connect();
      const provider = new Web3Provider(instance);
      const signer_ = provider.getSigner();
      const address_ = await signer_.getAddress();
      setSigner(signer_);
      setAddress(address_);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const contextValue = {signer, address, loading, connectWallet};

  return (
    <SignerContext.Provider value={contextValue}>
      {children}
    </SignerContext.Provider>
  );
};

export default useSignerContext;