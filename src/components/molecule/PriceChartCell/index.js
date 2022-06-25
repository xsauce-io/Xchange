import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../App.css";
import PriceChartGraph from "../PriceChartGraph";

/*
--------  PriceChartCell Component -----
 @Description : 
  PriceChartCell is a cell containing the price chart of syn. asset, the graph and filters.
  TODO: Separate filter component, separate price index (stats) component
*/

const PriceChartCell = ({ width, height, product }) => {
  return (
    <React.Fragment>
      <VStack
        marginTop={0}
        marginBottom="5%"
        width={width}
        height={height}
        minW="fit-content"
        minHeight="fit-content"
        bg="colors.primary.900"
        alignItems="left"
        border="0.5px solid"
        borderColor="colors.gray.700"
        borderRadius="xl"
      >
        {/*Cell Heading  */}

        <Flex padding={4}>
          <Text color="colors.white" fontSize="xl">
            Pie Chart
          </Text>
          <Spacer />
          <HStack>
            <Button size="xs" variant="outline">
              1 D
            </Button>
            <Button size="xs" variant="outline">
              1 W
            </Button>
            <Button size="xs" variant="outline">
              1 M
            </Button>
            <Button size="xs" variant="outline">
              3 M
            </Button>
            <Button size="xs" variant="outline">
              1 Y
            </Button>
            <Button size="xs" variant="outline">
              MAX
            </Button>
          </HStack>
        </Flex>

        <Flex
          flexDirection={"column"}
          bg="colors.primary.900"
          alignItems="left"
          padding={12}
          border="0.5px solid"
          width="100%"
          height="100%"
          borderColor="colors.gray.700"
          borderRadius="xl"
        >
          <Text color="colors.white" fontSize="md">
            {product.name}
          </Text>
          <Box justifyContent="center" textAlign={"left"}>
            <Text color="colors.gray.500" fontSize={"sm"}>
              Retail Price for xAsset
            </Text>
            <Box display={"inline-flex"} flexDirection="row" marginBottom={4}>
              <Box
                bg="colors.secondary.500"
                color="colors.primary.900"
                fontSize={10}
                padding={1}
                borderRadius={"md"}
              >
                <TriangleUpIcon />
                $891.60
              </Box>
              <Text color="colors.gray.500" fontSize={"sm"} alignSelf={"center"}>
                &nbsp; Last 6 days
              </Text>
            </Box>
            <PriceChartGraph />
          </Box>
        </Flex>
      </VStack>
    </React.Fragment>
  );
};

PriceChartCell.propTypes = {

  height: PropTypes.number || PropTypes.string,
  width: PropTypes.number || PropTypes.string,
  product: PropTypes.object,
  name: PropTypes.string,


}

export default PriceChartCell;