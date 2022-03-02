import { useSelector } from "react-redux";

const Display = () => {
  const wallet = useSelector((store) => store.wallet);

  return <div>R$ {wallet}</div>;
};

export default Display;
