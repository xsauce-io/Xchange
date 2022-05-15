import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { ConnectWallet } from "../../molecule/ConnectWallet";

/* */
export const Header = () => {
  return (
    <Box
      width="100%"
      bg="colors.primary.900"
      borderBottom="1px solid"
      borderColor="colors.gray.700"
    >
      <Container maxW="85%">
        <Flex
          flexDirection="row"
          paddingInlineStart={0}
          paddingInlineEnd={0}
          alignItems="center"
          paddingTop={4}
          paddingBottom={4}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="left"
            flex={1}
          >
            {/* ----- XSauce Logo ---- */}
            <Flex flexDirection="row">
              <AspectRatio w="20px" ratio={1 / 1}>
                <Box bg="colors.secondary.500" />
              </AspectRatio>
              <Spacer w={2} />
              <Text color="colors.white" fontSize={14} fontWeight="bold">
                Xsauce
              </Text>
            </Flex>
          </Flex>
          {/* ----- Top Nav ---- */}
          <HStack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            flex={1}
            color="colors.gray.500"
            spacing={8}
          >
            <NavLink to="Xvault" activeClassName="selected">
              <NavLink to="" activeClassName="selected">
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <ArrowBackIcon />
                  <Text fontSize={"xs"}>Xvault</Text>
                </Box>
              </NavLink>
            </NavLink>
            <NavLink to="Xhibit" activeClassName="selected">
              <Box display="flex" justifyContent={"center"} alignItems="center">
                <ArrowBackIcon />
                <Text fontSize={"xs"}>Xhibit</Text>
              </Box>
            </NavLink>
            <NavLink to="Xchange" activeClassName="selected">
              <Box display="flex" justifyContent={"center"} alignItems="center">
                <ArrowBackIcon />
                <Text fontSize={"xs"}>Xchange</Text>
              </Box>
            </NavLink>
          </HStack>

          {/* Wallet & Chain Buttons */}
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="right"
            flex={1}
          >
            <Button width="120px" borderRadius="2xl" variant="outline">
              <Text fontSize={"xs"} color="colors.white">
                Polygone
              </Text>
            </Button>
            <Spacer maxWidth={2} />
            <ConnectWallet />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
