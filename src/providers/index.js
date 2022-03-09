import { WalletProvider } from "./Wallet";
import { PokemonsProvider } from "./Pokemons";

const Providers = ({ children }) => {
  return (
    <WalletProvider>
      <PokemonsProvider>{children}</PokemonsProvider>
    </WalletProvider>
  );
};

export default Providers;
