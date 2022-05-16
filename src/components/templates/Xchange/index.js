import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Xchange = () => {
  return (
    <Box w="100%" minHeight="800px">
      {/* Core Header Section */}
      <Flex flexDirection="column">
        <Box bg="colors.primary.900" padding={1}>
          <Button
            leftIcon={<ArrowBackIcon />}
            size="xs"
            variant={"solid"}
            fontSize="xs"
          >
            Go Back
          </Button>
        </Box>
        <Box bg="colors.primary.900">
          <Flex flexDirection="column" paddingBottom={5}>
            <Heading
              color="colors.white"
              fontSize="7xl"
              fontWeight={400}
              marginTop={1}
              marginBottom={1}
            >
              Xchange
            </Heading>
            <Box width={140} height={1} bg="colors.secondary.500" />
          </Flex>
        </Box>

        {/* Core Body Section */}
        <HStack
          bg="colors.primary.900"
          borderBottomWidth={"1px"}
          borderBottomColor="colors.gray.700"
          color="colors.gray.500"
        >
          <NavLink to="portfolio" activeClassName="selected">
            <Text padding={2} fontSize={"md"}>
              Portfolio
            </Text>
          </NavLink>
          <NavLink to="markets" activeClassName="selected">
            <Text padding={2} fontSize={"md"}>
              Markets
            </Text>
          </NavLink>
          <NavLink to="swaps" activeClassName="selected">
            <Text padding={2} fontSize={"md"}>
              Swaps
            </Text>
          </NavLink>
        </HStack>
        <Box paddingTop={5} paddingBottom={5}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};
