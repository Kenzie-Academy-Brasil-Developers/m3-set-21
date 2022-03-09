import { useWallet } from "../../providers/Wallet";

const Display = () => {
  const { wallet } = useWallet()

  return <div>{wallet}</div>;
};

export default Display;
