import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CONTRACT_ADDRESS, useGetContract } from "../utils";

const Context = createContext({});

const AuthContext = ({ children }) => {
  const [address, setAddress] = useState();
  const { contract, provider, getContract } = useGetContract(
    CONTRACT_ADDRESS,
    !!address
  );
  const [connecting, setConnecting] = useState(false);

  const connectWallet = useCallback(async () => {
    console.log({ provider });
    try {
      if (provider) {
        setConnecting(true);
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts?.length > 0) {
          setAddress(accounts[0]);
        } else {
          throw new Error("Failed to connect wallet.");
        }
      } else {
        await getContract();
        throw new Error("Please install a wallet extension.");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setConnecting(false);
    }
  }, [provider, getContract]);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    } else {
      const selected = window.ethereum.selectedAddress;
      setAddress(selected);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        contract,
        connectWallet,
        address,
        connecting,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuthContext = () => useContext(Context);
export { AuthContext, useAuthContext };

AuthContext.propTypes = {
  children: PropTypes.node,
};
