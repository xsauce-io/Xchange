import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { parsePathname } from "../../../utils";
import { StakingCard } from "../../molecule/StakingCard";
/*
Props:
    height: number
    width: number
*/

export const Products = (props) => {
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

  var items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <WrapItem>
        <StakingCard w="217px" h="274px" />
      </WrapItem>
    );
  }

  return (
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
      minH={1300}
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
        <Wrap spacing={[30, 20, 8]}>{items}</Wrap>
      </Box>
    </VStack>
  );
};