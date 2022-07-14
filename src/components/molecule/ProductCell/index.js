import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, Image,
  Text,
  VStack
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";
import { useLocation } from "react-router-dom";


/*
--------  ProductCell Component -----
* @Description : 
*  ProductCell the core cell of the minting functionality.
*/


//Images for the slider
// const images = [
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
// ];

const ProductCell = ({ width, height, product }) => {
  const { state } = useLocation();

  //const parsedPathname = parsePathname(location.pathname); //parsedPathname

  const lowerCaseCategory = state.category.toLowerCase();

  const categoryLink = "/xchange/markets/" + state.category;
  const productLink = "/xchange/markets/" + lowerCaseCategory + "/" + state.id;

  // var breadcrumb = [];
  // for (let i = 1; i < parsedPathname.length; i++) {
  //   var tempPath = "";
  //   if (i === 1) {
  //     tempPath = "/xchange/markets";
  //   } else if (i === 2) {
  //     tempPath = "/xchange/markets/all";
  //   } else {
  //     for (let j = 1; j <= i; j++) {
  //       tempPath += "/" + parsedPathname[j];
  //     }
  //   }
  //   breadcrumb.push(
  //     <BreadcrumbItem>
  //       <BreadcrumbLink href={tempPath}>
  //         {parsedPathname[i].replace(/^./, (str) => str.toUpperCase())}
  //       </BreadcrumbLink>
  //     </BreadcrumbItem>
  //   );
  // }

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (

    <React.Fragment>
      <VStack
        width={width}
        height={height}
        maxHeight={"600px"}
        bg="colors.primary.900"
        alignItems="left"
        border="0.5px solid"
        borderColor="colors.gray.700"
        borderRadius="xl"
      >
        <Box padding={4} bg="red">
          <Text color="colors.white" fontSize="xl">
            Sneaker xAssets
          </Text>

          <Breadcrumb fontSize="xs" color={"colors.gray.500"}>
            <BreadcrumbItem>
              <BreadcrumbLink href={"/xchange"}>Xchange</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={"/xchange/markets/all"}>
                Markets
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={categoryLink}>
                {state.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={productLink}>{state.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box
          //bg="colors.primary.900"
          alignItems="left"
          padding={12}
          border="0.5px solid"
          width="100%"
          height="100%"
          borderColor="colors.gray.700"
          borderRadius="xl"
          borderBottom={0}
          borderLeft={0}
          borderRight={0}
          bg="blue"
        >
          <Text color="colors.white" fontSize="2xl">
            {product.name}
          </Text>
          <Box h="100%" alignSelf={'center'} bg="green" justifyItems={"center"}>
            <AspectRatio maxW="650px" ratio={[5 / 3,]} alignItems="center">
              <Image
                width="inherit"
                height="inherit"
                src={!product.image ? "" : product.image}
                justifySelf={"center"}
                bg="purple"
              />
            </AspectRatio>
          </Box>
        </Box>
      </VStack>
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

ProductCell.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
}

export default ProductCell;