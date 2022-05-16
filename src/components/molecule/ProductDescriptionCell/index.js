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
      minHeight="fit-content"
      bg="colors.primary.900"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.700"
      borderRadius={"xl"}
    >
      <Box>
        <Text color="colors.white" fontSize="lg">
          Product description
        </Text>
      </Box>
      <Container paddingInlineStart={0}>
        <Text color="colors.gray.500" fontSize="sm" alignContent="left">
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
        <Flex width="100%" paddingBottom={3} paddingTop={3}>
          <Box justifyContent="center">
            <Text fontSize="xs">Retail</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"}>
            <Text color="colors.white" fontSize="xs">
              $100.01
            </Text>
          </Box>
        </Flex>

        <Divider color="colors.gray.700" />

        {/* Release Date Section  */}
        <Flex width="100%" paddingBottom={3} paddingTop={3}>
          <Box justifyContent={"center"}>
            <Text fontSize="xs">Release Date</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"}>
            <Text color="colors.white" fontSize="xs">
              $120.01
            </Text>
          </Box>
        </Flex>
        <Divider color="colors.gray.700" />
        {/* All time high Section  */}
        <Flex width="100%">
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize="xs">All-time high</Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            paddingBottom={3}
            paddingTop={3}
            textAlign={"right"}
          >
            <Box display={"inline-flex"} flexDirection="row">
              <Text color="colors.white" fontSize="xs">
                $460.48
              </Text>

              <Text color="colors.alert" fontSize="xs">
                &nbsp;-81.6%
              </Text>
            </Box>

            <Text color="colors.gray.500" fontSize="xs">
              Jul 09, 2020 (over 1 year)
            </Text>
          </Box>
        </Flex>
        <Divider color="colors.gray.700" />
        {/* All time low Section  */}
        <Flex width="100%">
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize="xs"> All-time low</Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            paddingBottom={3}
            paddingTop={3}
            textAlign={"right"}
          >
            <Box display={"inline-flex"} flexDirection="row">
              <Text color="colors.white" fontSize="xs">
                $231.28
              </Text>

              <Text color="colors.success" fontSize="xs">
                &nbsp;+81.6%
              </Text>
            </Box>
            <Text color="colors.gray.500" fontSize="xs">
              Jul 09, 2020 (over 1 year)
            </Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};
