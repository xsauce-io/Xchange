import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Core } from "../components/organisms/Core";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

export const PageLayout = () => {
  return (
    <Container
      maxW="100%"
      paddingInlineStart={0}
      paddingInlineEnd={0}
      bg="colors.primary.900" // testing extended theme
    >
      <Box marginTop={0} marginBottom="5%">
        <Header />
      </Box>

      <Container maxW="85%">
        <Core />
      </Container>
      <Box marginBottom={0}>
        <Footer />
      </Box>
    </Container>
  );
};
