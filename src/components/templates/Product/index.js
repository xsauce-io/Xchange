import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { MintingCell } from "../../molecule/MintingCell/index.js";
import { PriceChartCell } from "../../molecule/PriceChartCell";
import { ProductCell } from "../../molecule/ProductCell";
import { ProductDescriptionCell } from "../../molecule/ProductDescriptionCell";

export const Product = () => {
  return (
    <Box w="100%" minHeight="fit-content" color="colors.gray.500">
      {/* Product Tab */}
      <Grid
        templateColumns="repeat(auto-fit, 1fr)"
        templateRows="repeat(auto-fit, 1fr)"
        gap={6}
      >
        <GridItem
          colSpan={3}
          colStart={1}
          colEnd={4}
          rowSpan={5}
          minHeight={"530px"}
        >
          <ProductCell width="100%" />
          <PriceChartCell />
        </GridItem>
        <GridItem colStart={4} rowSpan={5} minHeight={"530px"}>
          <MintingCell width="100%" />
          <ProductDescriptionCell width="100%" />
        </GridItem>
      </Grid>
    </Box>
  );
};
