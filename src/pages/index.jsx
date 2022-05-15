import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

export const PageLayout = () => {
  return (
    <Box
      maxW="100%"
      paddingInlineStart={0}
      paddingInlineEnd={0}
      bg="colors.primary.900"
      alignItems={"center"}
    >
      {/* Header */}
      <Box marginTop={0} marginBottom="5%">
        <Header />
      </Box>

      <Container maxWidth="85%">
        <Outlet />
      </Container>

      {/* Footer */}
      <Box marginBottom={0} marginTop={"5%"}>
        <Footer />
      </Box>
    </Box>
  );
};
