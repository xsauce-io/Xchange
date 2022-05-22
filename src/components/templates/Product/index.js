import { Box, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MintingCell } from "../../molecule/MintingCell/index.js";
import { OracleCell } from "../../molecule/OracleCell/index.js";
import { PriceChartCell } from "../../molecule/PriceChartCell";
import { ProductCell } from "../../molecule/ProductCell";
import { ProductDescriptionCell } from "../../molecule/ProductDescriptionCell";

export const Product = () => {
  let { productId } = useParams();

  const options = {
    method: "GET",
    url: "https://xchange-temporary-server.herokuapp.com/api/v1/products",
  };

  //const [response, setResponse] = useState([]);
  const [product, setProduct] = useState({
    brand: "",
    colorway: "",
    estimatedMarketvalue: "",
    gender: "",
    id: "",
    image: "",
    name: "",
    releaseDate: "",
    releaseYear: "",
    story: "",
    silhouette: "",
    retailPrice: "",
    sku: "",
  });

  const getSneaker = () => {
    axios
      .request(options)
      .then(function (response) {
        //filter response data by id
        const res = response.data.results.filter(
          (item) => item.id === productId
        );
        console.log(res);
        res.map((item) =>
          setProduct({
            brand: item.brand,
            colorway: item.colorway,
            estimatedMarketvalue: item.estimatedMarketValue,
            gender: item.gender,
            id: item.id,
            image: item.image.original,
            name: item.name,
            releaseDate: item.releaseDate,
            releaseYear: item.releaseYear,
            story: item.story,
            silhouette: item.silhouette,
            retailPrice: item.retailPrice,
            sku: item.sku,
          })
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getSneaker();
  }, []);

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
          <ProductCell width="100%" product={product} />
          <PriceChartCell product={product} />
        </GridItem>
        <GridItem colStart={4} rowSpan={5} minHeight={"530px"}>
          <MintingCell width="100%" product={product} />
          <OracleCell width="100%" product={product}/>
          <ProductDescriptionCell width="100%" product={product} />
        </GridItem>
      </Grid>
    </Box>
  );
};
