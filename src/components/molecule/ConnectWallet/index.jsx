import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import theme from "../../../utils/theme/theme";

export const ConnectWallet = () => {
  const { connecting, address, connectWallet } = useAuthContext();

  return (
    <Box>
      {connecting ? (
        <Spinner />
      ) : address ? (
        <Box
          bg={theme.colors.dark}
          fontSize={10}
          border="1px solid"
          borderColor={theme.colors.midgrey}
          color={theme.colors.white}
          height="0"
          padding={3}
        >
          <Text>Wallet Connected at: {address}</Text>
        </Box>
      ) : (
        <Button
          bg={theme.colors.dark}
          fontSize={10}
          border="1px solid"
          borderColor={theme.colors.midgrey}
          onClick={connectWallet}
          color={theme.colors.white}
          height="0"
          padding={3}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};
