import { Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

/*
--------  PageLayout Component -----
* @Description : 
* Establish page layout. Currently divided as Header, Outlet and Footer
*/

export const PageLayout = () => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <VStack
        paddingInlineStart={0}
        paddingInlineEnd={0}
        bg="colors.primary.900"
        alignItems={"center"}
      >
        {/* Header */}
        <Flex w="100%" marginTop={0} marginBottom="5%">
          <Header />
        </Flex>

        <Container maxWidth="85%">
          <Outlet />
        </Container>

        {/* Footer */}
        <Flex w="100%" marginBottom={0} marginTop={"5%"}>
          <Footer />
        </Flex>
      </VStack>
    </React.Fragment>
  );
};


