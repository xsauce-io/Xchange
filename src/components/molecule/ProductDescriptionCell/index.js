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

const ProductDescriptionCell = ({ width, height, product }) => {
  const retailPrice = (Math.round(product.retailPrice * 100) / 100).toFixed(2);

  /*-------------------------------------
*-------- RENDERED CONTENT ------------
*------------------------------------*/

  return (
    <React.Fragment>
      <VStack
        marginTop={0}
        width={width}
        height={height}
        bg="colors.primary.900"
        alignItems="left"
        padding={12}
        border="1px solid"
        borderColor="colors.gray.700"
        borderRadius={"xl"}
        color="colors.white"
      >
        <Box paddingBottom={4}>
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
              <Text fontSize="sm">Retail</Text>
            </Box>
            <Spacer />
            <Box justifyContent={"center"}>
              <Text color="colors.white" fontSize="sm">
                ${retailPrice}
              </Text>
            </Box>
          </Flex>

          <Divider color="colors.gray.700" />

          {/* Release Date Section  */}
          <Flex width="100%" paddingBottom={3} paddingTop={3}>
            <Box justifyContent={"center"}>
              <Text fontSize="sm">Release Date</Text>
            </Box>
            <Spacer />
            <Box justifyContent={"center"}>
              <Text color="colors.white" fontSize="sm">
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
              <Text fontSize="sm">All-time high</Text>
            </Box>
            <Spacer />
            <Box
              justifyContent="center"
              paddingBottom={3}
              paddingTop={3}
              textAlign={"right"}
            >
              <Box display={"inline-flex"} flexDirection="row">
                <Text color="colors.white" fontSize="sm">
                  $460.48
                </Text>

                <Text color="colors.alert" fontSize="sm">
                  &nbsp;-81.6%
                </Text>
              </Box>

              <Text color="colors.gray.500" fontSize="sm">
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
              <Text fontSize="sm">All-time low</Text>
            </Box>
            <Spacer />
            <Box
              justifyContent="center"
              paddingTop={3}
              textAlign={"right"}
            >
              <Box display={"inline-flex"} flexDirection="row">
                <Text color="colors.white" fontSize="sm">
                  $231.28
                </Text>

                <Text color="colors.success" fontSize="sm">
                  &nbsp;+81.6%
                </Text>
              </Box>
              <Text color="colors.gray.500" fontSize="sm">
                Jul 09, 2020 (over 1 year)
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </React.Fragment>
  );
};

ProductDescriptionCell.propTypes = {

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  story: PropTypes.string,

}

export default ProductDescriptionCell;