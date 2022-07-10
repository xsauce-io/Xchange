import { Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import { useWindowDimensions } from "../utils";
/*
--------  PageLayout Component -----
* @Description : 
* Establish page layout. Currently divided as Header, Outlet and Footer
*/

export const PageLayout = () => {
  const { width, height } = useWindowDimensions();

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
        minW={"fit-content"}
      >
        {/* Header */}
        <Flex w="100%" marginTop={0} marginBottom="5%">
          <Header />
        </Flex>

        {/*Core Content */}
        <Container minW={"85%"} paddingX={20} >
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


