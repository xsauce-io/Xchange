import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MintingCell from "../../molecule/MintingCell";
import PriceChartCell from "../../molecule/PriceChartCell";
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
      <SimpleGrid columns={[1, null, 2]} spacing='40px' width={'100%'} height={'30%'}>
        <ProductCell width="100%" height="100%" product={product} />
        <MintingCell width={"100%"} height="100%" product={product} />
        <PriceChartCell width={"100%"} product={product} />
        <ProductDescriptionCell width={"100%"} product={product} />

      </SimpleGrid>
      {/* <VStack flexWrap="wrap" marginTop={0} Box spacing={6}>
        <HStack width={"100%"} height={"100%"} spacing={6} alignItems={"stretch"}>
          <ProductCell width="60%" product={product} />
          <MintingCell width={"40%"} product={product} />
        </HStack>
        <HStack width={"100%"} height={"100%"} spacing={6} alignItems={"stretch"}>
          <PriceChartCell width={"60%"} product={product} />
          <ProductDescriptionCell width={"40%"} product={product} />
        </HStack>
      </VStack> */}
    </React.Fragment>
  );
};

export default Product;