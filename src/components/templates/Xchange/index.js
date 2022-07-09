import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context";
import CustomLink from "../../atomic/CustomLink";

/*
--------  Xchange Component -----
* @Description : 
*  Core Page for the Xchange feature and /xchange endpoint
*/

const Xchange = () => {

  let navigate = useNavigate();
  const { daiContract } = useAuthContext();

  const goToPreviousPath = () => navigate(-1);

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
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
              <Box width={270} height={1} bg="colors.secondary.500" />
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
            <CustomLink to="/xchange/markets/all" customResolved="/xchange/markets/">
              <Text padding={2} fontSize={"md"}>
                Markets
              </Text>
            </CustomLink>
            {/* <NavLink to="/xchange/markets/all" style={{ color: match ? "white" : "#6c7979" }} >
              <Text padding={2} fontSize={"md"}>
                Markets
              </Text>
            </NavLink> */}
            {/* <NavLink to="/xchange/swaps" activeclassname="selected">
            <Text padding={2} fontSize={"md"}>
              Swaps
            </Text>
          </NavLink> */}
          </HStack>
          {/* <Box>
            <Button
              onClick={() =>
                daiContract.approve(
                  "0x175f9d9bBc1937D0B1243f605141991bcCc10905",
                  parseEther("10")
                )
              }
            >
              Approve Spending
            </Button>
          </Box> */}
          <Box paddingTop={5} paddingBottom={5} >
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Xchange;