import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MintingCell from "../../molecule/MintingCell";
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


    <>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing='40px' width={'100%'}  >
        <ProductCell width="100%" height="100%" product={product} />
        <MintingCell width={"100%"} height="100%" product={product} />
      </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, md: 1 }} spacing='40px' width={'100%'} marginTop={"40px"} >
        <ProductDescriptionCell width={"100%"} height={"100%"} product={product} />
      </SimpleGrid>
      {/*   ---- Option that includes chart PriceGraph
      
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing='40px' width={'100%'} height={'30%'} >
        <ProductCell width="100%" height="100%" product={product} />
        <MintingCell width={"100%"} height="100%" product={product} />
        <PriceChartCell width={"100%"} height="100%" product={product} />
        <ProductDescriptionCell width={"100%"} height={"100%"} product={product} />
        
      </SimpleGrid> */}
    </ >
  );
};

export default Product;