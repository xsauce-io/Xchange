import { ethers } from "ethers";
import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ERC20Abi from "../assets/contract/erc-dai.abi.json";
import { CONTRACT_ADDRESS, useGetContract } from "../utils";

const Context = createContext({});

const AuthContext = ({ children }) => {
  const [address, setAddress] = useState();
  const [daiContract, setDaiContract] = useState(undefined);
  const { contract, provider, getContract } = useGetContract(
    CONTRACT_ADDRESS,
    !!address
  );
  const [connecting, setConnecting] = useState(false);

  const initializeDaiContract = useCallback(async () => {
    if (provider) {
      const address = "0x8a9424745056Eb399FD19a0EC26A14316684e274";
      const signer = await provider.getSigner();
      const erc20 = new ethers.Contract(address, ERC20Abi, signer);
      setDaiContract(erc20);
    }
  }, [provider]);

  const connectWallet = useCallback(async () => {
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

  useEffect(() => {
    initializeDaiContract();
  }, [initializeDaiContract]);

  return (
    <Context.Provider
      value={{
        contract,
        connectWallet,
        address,
        connecting,
        daiContract,
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
