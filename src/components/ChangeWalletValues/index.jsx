import { useWallet } from "../../providers/Wallet";

const ChangeWalletValues = () => {
  const { depositWallet, withdrawWallet } = useWallet();

  return (
    <div>
      <button onClick={depositWallet}>Deposit R$ 10</button>
      <button onClick={withdrawWallet}>Withdraw R$ 10</button>
    </div>
  );
};

export default ChangeWalletValues;
