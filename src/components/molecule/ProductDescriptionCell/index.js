import {
  Box,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";


/*
Props:
    height: number
    width: number
*/

export const ProductDescriptionCell = ({ width, height, product }) => {
  const retailPrice = (Math.round(product.retailPrice * 100) / 100).toFixed(2);

  return (
    <VStack
      marginTop={0}
      width={width}
      height={""}
      bg="colors.primary.900"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.700"
      borderRadius={"xl"}
      color="colors.white"
    >
      <Box paddingBottom={5}>
        <Text color="colors.white" fontSize="xl">
          Product description
        </Text>
      </Box>
      <Container paddingInlineStart={0}>
        <Text color="colors.gray.500" fontSize="sm" alignContent="left">
          {!product.story ? 'No story was provided for the ' + product.name : product.story}
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
              ${retailPrice}
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
              {product.releaseDate}
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
            <Text fontSize="xs">All-time low</Text>
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
    </VStack >
  );
};

ProductDescriptionCell.propTypes = {

  height: PropTypes.string || PropTypes.number,
  width: PropTypes.number || PropTypes.string,
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  story: PropTypes.string,

}
