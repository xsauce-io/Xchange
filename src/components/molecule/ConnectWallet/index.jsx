import { CopyIcon } from "@chakra-ui/icons";
import { Button, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";


/*
--------  Connect Wallet Component -----
* @Description : 
* Button to allow user to connect to wallet. 
* The component access authContext variable.
*/

const ConnectWallet = () => {
  const { connecting, address, connectWallet } = useAuthContext();

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      {connecting ? (
        <Spinner />
      ) : address ? (
        <Button
          variant="outline"
          fontSize="xs"
          height="0"
          padding={4}
          width="120px"
          borderRadius="2xl"
          //onclick it will copy
        >
          <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            {address}
          </Text>
          <CopyIcon color="colors.secondary.500"></CopyIcon>
        </Button>
      ) : (
        <Button
          variant="outline"
          fontSize="xs"
          onClick={connectWallet}
          height="0"
          padding={4}
          width="140px"
          borderRadius="2xl"
        >
          Connect Wallet
        </Button>
      )}
    </React.Fragment>
  );
};

export default ConnectWallet;