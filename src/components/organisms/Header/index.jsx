import { LinkIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box, Container, Flex,
  HStack, Select,
  Spacer,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { useWindowDimensions } from "../../../utils/hooks/use-window-dimensions";
import CustomLink from "../../atomic/CustomLink";
import ConnectWallet from "../../molecule/ConnectWallet";
import HeaderDrawer from "../../molecule/HeaderDrawer";


/* */
const Header = () => {
  const { width, height } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <React.Fragment>
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
            {width <= '1200' ?
              <HeaderDrawer />
              :
              <React.Fragment>
                <HStack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  flex={1}
                  color="colors.gray.500"
                  spacing={8}
                  fontSize={"md"}
                >
                  <CustomLink to="/xvault" >
                    <Box display="flex" justifyContent={"center"} alignItems="center">

                      <Text >Xvault</Text>
                    </Box>
                  </CustomLink>
                  <CustomLink to="/xhibit" >
                    <Box display="flex" justifyContent={"center"} alignItems="center">
                      <Text >Xhibit</Text>
                    </Box>
                  </CustomLink>
                  <CustomLink to="/xchange/markets/all" customResolved={"/xchange"}  >
                    <Box display="flex" justifyContent={"center"} alignItems="center">
                      {/* <ArrowBackIcon /> */}
                      <Text>Xchange</Text>
                    </Box>
                  </CustomLink>
                </HStack>

                {/* Wallet & Chain Buttons */}
                <Flex
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="right"
                  flex={1}
                >
                  <Select
                    placeholder="Polygon"
                    width="130px"
                    borderRadius="2xl"
                    variant="unstyled"
                    height="35px"
                    fontSize={"xs"}
                    color="colors.white"
                    textAlign={"center"}
                    icon={<LinkIcon />}
                    iconSize={"sm"}
                    iconColor="purple"
                    border="1px solid #30403F"
                  >
                    <option value="option2">Polygon</option>
                  </Select>

                  <Spacer maxWidth={2} />
                  <ConnectWallet />
                </Flex>
              </React.Fragment>
            }


          </Flex>
        </Container>
      </Box >
    </React.Fragment >
  );
};


export default Header;