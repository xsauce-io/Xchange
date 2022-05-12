import { CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

export const ConnectWallet = () => {
  const { connecting, address, connectWallet } = useAuthContext();

  return (
    <Box>
      {connecting ? (
        <Spinner />
      ) : address ? (
        <Button
          variant="outline"
          fontSize="xs"
          borderColor="colors.gray.700"
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
    </Box>
  );
};
