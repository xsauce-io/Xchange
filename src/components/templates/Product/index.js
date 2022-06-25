import { Box, HStack, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CallOptionCell from "../../molecule/CallOptionCell";
import LockPositionCell from "../../molecule/LockPositionCell";
import ProductCell from "../../molecule/ProductCell";
import ProductDescriptionCell from "../../molecule/ProductDescriptionCell";

/*
--------  Product Component -----
* @Description : 
*  
*/

const Product = () => {
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

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (


    <React.Fragment>
      <VStack flexWrap="wrap" marginTop={0} Box spacing={6}>
        <HStack width={"100%"} height={"100%"} spacing={6} alignItems={"stretch"}>
          <ProductCell width="60%" product={product} />
          <ProductDescriptionCell width={"40%"} product={product} />
          {/* <PriceChartCell width="200" product={product} /> */}
        </HStack>
        <Box width={"100%"} >
          <CallOptionCell />
        </Box>
        <Box width={"100%"} >
          <LockPositionCell />
        </Box>
      </VStack>
    </React.Fragment>
  );
};

export default Product;