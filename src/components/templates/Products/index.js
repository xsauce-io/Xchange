import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { parsePathname } from "../../../utils";
import StakingCard from "../../molecule/StakingCard";

/*
--------  Products Component -----
* @Description : 
*  Products the core cell of the minting functionality.
*/

const Products = () => {
  const location = useLocation();
  const parsedPathname = parsePathname(location.pathname); //parsedPathname

  var breadcrumb = [];

  // Create breadcrumb path dynamically
  for (let i = 1; i < parsedPathname.length; i++) {
    var tempPath = "";
    if (i === 1) {
      tempPath = "/xchange/markets";
    } else if (i === 2) {
      tempPath = "/xchange/markets/all";
    } else {
      for (let j = 1; j <= i; j++) {
        tempPath += "/" + parsedPathname[j];
      }
    }
    breadcrumb.push(
      <BreadcrumbItem key={i}>
        <BreadcrumbLink href={tempPath} key={i}>
          {parsedPathname[i].replace(/^./, (str) => str.toUpperCase())}
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  }

  const options = {
    method: "GET",
    url: "https://xchange-temporary-server.herokuapp.com/api/v1/products",
  };

  const [response, setResponse] = useState([]);

  // fetch sneaker data
  const getSneaker = () => {
    axios
      .request(options)
      .then(function (response) {
        setResponse(response.data.results);
        console.log(response.data.results);
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
      <VStack
        marginTop={0}
        minHeight="fit-content"
        bg="colors.primary.900"
        alignItems="left"
        border="0.5px solid"
        borderColor="colors.gray.700"
        borderRadius="xl"
        alignSelf="flex-start"
        Box

      >
        <Box padding={4}>
          <Text color="colors.white" fontSize="xl">
            Sneaker xAssets
          </Text>
          <Breadcrumb fontSize="xs" color="colors.gray.500">
            {breadcrumb}
          </Breadcrumb>
        </Box>
        <Box
          bg="colors.primary.900"
          alignItems="left"
          padding={8}
          border="0.5px solid"
          width="100%"
          borderColor="colors.gray.700"
          borderRadius="xl"
          minH={"1210px"}
        >
          <Wrap spacing={[30, 20, 8]}>
            {" "}
            {response.map((el) => (
              <WrapItem key={el.id}>
                <StakingCard
                  w="217px"
                  h="274px"
                  price={el.estimatedMarketValue}
                  imgSrc={el.image.original}
                  id={el.id}
                  name={el.name}
                  subTitle={el.colorway}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </VStack>
    </React.Fragment>
  );
};

export default Products;