import { useDispatch } from "react-redux";

import {deposit, withdraw} from '../../Store/Modules/Wallet/actions'

const ChangeValue = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(deposit(10))}>
        Deposit R$10
      </button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw R$10</button>
    </div>
  );
};

export default ChangeValue;
