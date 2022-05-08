import { Box, Button, Container, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../context";

export const PageLayout = () => {
  const { connecting, address, connectWallet } = useAuthContext();

  return (
    <Container>
      <Box>
        {connecting ? (
          <Spinner />
        ) : address ? (
          <Text w="100%">Wallet Connected at: {address}</Text>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </Box>
    </Container>
  );
};
