import { Box, Button, Container, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { Core } from "../components/organisms/Core";
import { Header } from "../components/organisms/Header";
import { useAuthContext } from "../context";
import theme from "../utils/theme/theme";

export const PageLayout = () => {
  const { connecting, address, connectWallet } = useAuthContext();

  return (
    <Container
      maxW="100%"
      paddingInlineStart={0}
      paddingInlineEnd={0}
      bg={theme.colors.dark}
    >
      <Header />
      <Box>
        {connecting ? (
          <Spinner />
        ) : address ? (
          <Text w="100%">Wallet Connected at: {address}</Text>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </Box>
      <Container maxW="85%">
        <Core />
      </Container>
    </Container>
  );
};
