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
          borderColor={theme.colors.darkgrey}
          color={theme.colors.white}
          height="0"
          padding={4}
          width="120px"
          borderRadius={45}
        >
          <Text>Wallet Connected at: {address}</Text>
        </Box>
      ) : (
        <Button
          bg={theme.colors.dark}
          fontSize={10}
          border="1px solid"
          borderColor={theme.colors.darkgrey}
          onClick={connectWallet}
          color={theme.colors.white}
          height="0"
          padding={4}
          width="140px"
          borderRadius={45}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};
