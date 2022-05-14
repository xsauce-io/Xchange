import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

/*
Props:
    height: number
    width: number
*/

//Images for the slider
const images = [
  { url: "public/logo512.png" },
  { url: "public/logo512.png" },
  { url: "public/logo512.png" },
  { url: "public/logo512.png" },
  { url: "public/logo512.png" },
];

export const ProductCell = (props) => {
  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={props.width}
      height={props.height}
      maxWidth="100%"
      minW={350}
      minHeight="fit-content"
      bg="colors.primary.900"
      alignItems="left"
      border="1px solid"
      borderColor="colors.gray.500"
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
        border="1px solid"
        width="100%"
        borderColor="colors.gray.500"
        borderRadius="xl"
      >
        <Text color="colors.white" fontSize="2xl">
          XJ1 Retro Chicago 2022 first edition
        </Text>
        <Box h={400} padding={4}>
          <SimpleImageSlider
            width="550px"
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
