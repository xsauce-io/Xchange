import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export const Xchange = () => {
  let navigate = useNavigate();

  const goToPreviousPath = () => navigate(-1);

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
            onClick={goToPreviousPath}
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
          <NavLink to="/xchange/portfolio" activeclassname="selected">
            <Text padding={2} fontSize={"md"}>
              Portfolio
            </Text>
          </NavLink>
          <NavLink to="/xchange/markets" activeclassname="selected">
            <Text padding={2} fontSize={"md"}>
              Markets
            </Text>
          </NavLink>
          <NavLink to="/xchange/swaps" activeclassname="selected">
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
