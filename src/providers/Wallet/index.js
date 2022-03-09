import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(0);

  const depositWallet = () => {
    setWallet(wallet + 10);
  };

  const withdrawWallet = () => {
    setWallet(wallet - 10);
  };

  return (
    <WalletContext.Provider value={{ wallet, depositWallet, withdrawWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
