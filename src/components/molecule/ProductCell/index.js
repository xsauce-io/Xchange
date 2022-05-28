import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";
import { useLocation } from "react-router-dom";

/*
Props:
    height: number
    width: number
*/

//Images for the slider
// const images = [
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
//   { url: "https://via.placeholder.com/150" },
// ];

export const ProductCell = ({ width, height, product }) => {
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

  return (
    <VStack
      width={width}
      height={height}
      bg="colors.primary.900"
      alignItems="left"
      border="0.5px solid"
      borderColor="colors.gray.700"
      borderRadius="xl"
    >
      <Box padding={4}>
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
        bg="colors.primary.900"
        alignItems="left"
        padding={12}
        border="0.5px solid"
        width="100%"
        borderColor="colors.gray.700"
        borderRadius="xl"
      >
        <Text color="colors.white" fontSize="4xl">
          {product.name}
        </Text>
        <Box h="410px" padding={4}>
          {/* <SimpleImageSlider
            width="630px"
            height="inherit"
            images={images}
            showBullets={true}
            showNavs={true}
          /> */}
          <AspectRatio maxW="650px" ratio={5 / 3} alignItems="center">
            <Image
              width="630px"
              height="inherit"
              src={!product.image ? "" : product.image}
            />
          </AspectRatio>
        </Box>
      </Box>
    </VStack>
  );
};

ProductCell.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
}
