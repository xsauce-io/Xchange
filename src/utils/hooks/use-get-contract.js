import Portis from "@portis/web3";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import SaltyBubblesAbi from "../../assets/contract/saucer.json";

export const useGetContract = (
  address = "0x3F72c6c30CE1ca5a394b9048a64C951AD6BFB410",
  shouldFetch
) => {
  const [contract, setContract] = useState(null);
  const [provider, setInstance] = useState();
  const [signer, setSigner] = useState(null);

  const getWeb3ModalInstance = useCallback(async () => {
    const providerOptions = {
      portis: {
        package: Portis,
        options: {
          id: "8e23465f-c9a7-410a-92df-18b2e3d1c38f",
          network: "maticMumbai",
        },
      },
    };
    const web3Modal = new Web3Modal({
      providerOptions,
    });
    const instance = await web3Modal.connect();
    return instance;
  }, []);

  const getContract = useCallback(async () => {
    const web3 = await getWeb3ModalInstance();
    const provider = new ethers.providers.Web3Provider(web3);

    setInstance(provider);
    const signer = provider.getSigner();
    setSigner(signer);

    const contract = new ethers.Contract(address, SaltyBubblesAbi.abi, signer);
    setContract(contract);
  }, [address, getWeb3ModalInstance]);

  useEffect(() => {
    if (shouldFetch) {
      getContract();
    }
  }, [getContract, shouldFetch]);

  return {
    contract,
    signer,
    getContract,
    provider,
  };
};
