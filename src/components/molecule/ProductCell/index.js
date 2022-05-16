import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

/*
Props:
    height: number
    width: number
*/

//Images for the slider
const images = [
  { url: "https://via.placeholder.com/150" },
  { url: "https://via.placeholder.com/150" },
  { url: "https://via.placeholder.com/150" },
  { url: "https://via.placeholder.com/150" },
  { url: "https://via.placeholder.com/150" },
];

export const ProductCell = (props) => {
  const location = useLocation();
  console.log(location.pathname); //TODO: Implement breadcrumb using this pathname.
  return (
    <VStack
      marginTop={0}
      marginBottom="3%"
      width={props.width}
      height={props.height}
      minHeight="fit-content"
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
        <Breadcrumb fontSize="xs">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Xchange</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Markets</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Sneakers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">
              XJ1 Retro Chicago 2022 first edition
            </BreadcrumbLink>
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
        <Text color="colors.white" fontSize="2xl">
          XJ1 Retro Chicago 2022 first edition
        </Text>
        <Box h="410px" padding={4}>
          <SimpleImageSlider
            width="630px"
            height="inherit"
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </Box>
      </Box>
    </VStack>
  );
};
