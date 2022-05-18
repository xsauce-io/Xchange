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
import { parsePathname } from "../../../utils";

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

  const parsedPathname = parsePathname(location.pathname); //parsedPathname
  console.log(parsedPathname);

  var breadcrumb = [];

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
      <BreadcrumbItem>
        <BreadcrumbLink href={tempPath}>
          {parsedPathname[i].replace(/^./, (str) => str.toUpperCase())}
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  }

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
        <Breadcrumb fontSize="xs">{breadcrumb}</Breadcrumb>
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
