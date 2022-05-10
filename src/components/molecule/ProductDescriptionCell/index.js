import {
  Box,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

/*
Props:
    height: number
    width: number
*/

export const ProductDescriptionCell = (props) => {
  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={props.width}
      height={props.height}
      maxWidth="100%"
      minW={250}
      minHeight="fit-content"
      bg="colors.dark"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.grey"
      borderRadius={10}
    >
      <Box>
        <Text color="colors.white" fontSize="lg">
          Product description
        </Text>
      </Box>
      <Container paddingInlineStart={0}>
        <Text color="colors.grey" fontSize="sm" alignContent="left">
          This Xsauce Vault NFT represents and tracks proof of ownership of the
          actual sneaker stored within our Xsauce Vault, which has been verified
          via Xsauce’s authentication process. Note only 250 out of 500 editions
          will be made available for initial purchase, with the remaining 250
          being reserved for potential "shock drops" by Xsauce.
        </Text>
      </Container>
      {/* Price Statistics Section */}
      <Box>
        {/* Retail Price Secion  */}
        <Flex width="100%">
          <Box justifyContent="center" paddingBottom={3} paddingTop={3}>
            <Text fontSize={12}>Retail</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text color="colors.white" fontSize={12}>
              $100.01
            </Text>
          </Box>
        </Flex>

        <Divider color="color.darkgrey" />

        {/* Release Date Section  */}
        <Flex width="100%">
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text fontSize={12}>Release Date</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text color="colors.white" fontSize={12}>
              $100.01
            </Text>
          </Box>
        </Flex>
        <Divider color="color.darkgrey" />
        {/* All time high Section  */}
        <Flex width="100%">
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize={12}>All-time high</Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            paddingBottom={3}
            paddingTop={3}
            textAlign={"right"}
          >
            <Box display={"inline-flex"} flexDirection="row">
              <Text color="colors.white" fontSize={12}>
                $460.48
              </Text>

              <Text color="red" fontSize={12}>
                &nbsp;-81.6%
              </Text>
            </Box>

            <Text color="colors.grey" fontSize={12}>
              Jul 09, 2020 (over 1 year)
            </Text>
          </Box>
        </Flex>
        <Divider color="color.darkgrey" />
        {/* All time low Section  */}
        <Flex width="100%">
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize={12}>All-time low</Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            paddingBottom={3}
            paddingTop={3}
            textAlign={"right"}
          >
            <Box display={"inline-flex"} flexDirection="row">
              <Text color="colors.white" fontSize={12}>
                $231.28
              </Text>

              <Text color="colors.green" fontSize={12}>
                &nbsp;+81.6%
              </Text>
            </Box>
            <Text color="colors.grey" fontSize={12}>
              Jul 09, 2020 (over 1 year)
            </Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};
