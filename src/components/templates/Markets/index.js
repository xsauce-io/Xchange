import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  CheckboxGroup,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Divider from "../../atomic/Divider";
import { StakingCard } from "../../molecule/StakingCard";

/*
Props:
    height: number
    width: number
*/

export const Markets = (props) => {
  const location = useLocation();
  console.log(location.pathname); //TODO: Implement breadcrumb using this pathname.

  var items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <WrapItem>
        <StakingCard w="217px" h="274px" />
      </WrapItem>
    );
  }

  return (
    <HStack spacing={5} marginBottom="3%">
      <VStack
        marginTop={0}
        minHeight="fit-content"
        bg="colors.primary.900"
        alignItems="left"
        alignSelf="flex-start"
      >
        {/* Filters */}
        {/* Category*/}
        <Box width={200} height={1300}>
          <Box>
            <Text
              to="Footwear"
              className="filter-category-link"
              activeClassName="filter-category-link-active"
            >
              Footwear
            </Text>
            <Text
              to="Footwear"
              className="filter-category-link"
              activeClassName="filter-category-link-active"
            >
              Sneakers
            </Text>
            <Text
              to="Footwear"
              className="filter-category-link"
              activeClassName="filter-category-link-active"
            >
              Watches
            </Text>
            <Text
              to="Footwear"
              className="filter-category-link"
              activeClassName="filter-category-link-active"
            >
              Bags
            </Text>
            <Text
              to="Footwear"
              className="filter-category-link"
              activeClassName="filter-category-link-active"
            >
              NFT
            </Text>
          </Box>
          <Divider spacing={8} />

          {/* Rating*/}
          <CheckboxGroup
            //colorScheme="colors.secondary.500"
            color="colors.gray.500"
            alignItems="left"
          >
            <VStack spacing={[1, 3]} color="colors.gray.500" align>
              <Text to="Footwear" className="filter-category-link">
                Xsauce rating
              </Text>
              <Checkbox value="5stars">
                5 stars <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon />
              </Checkbox>
              <Checkbox value="4stars">
                4 stars <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
              </Checkbox>
              <Checkbox value="3stars">
                3 stars <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
              </Checkbox>
              <Checkbox value="2stars">
                2 stars <span />
                <StarIcon /> <span />
                <StarIcon /> <span />
              </Checkbox>
              <Checkbox value="1star">
                1 star <span />
                <StarIcon />
              </Checkbox>
            </VStack>
          </CheckboxGroup>
          <Divider spacing={8} />

          {/* Price Range*/}
          <CheckboxGroup
            //colorScheme="colors.secondary.500"
            color="colors.gray.500"
            alignItems="left"
          >
            <VStack spacing={[1, 3]} color="colors.gray.500" align>
              <Text to="Footwear" className="filter-category-link">
                Prices
              </Text>
              <Checkbox value="under100">Under $100</Checkbox>
              <Checkbox value="100to200">$100 - $200</Checkbox>
              <Checkbox value="200to300">$200 - $300</Checkbox>
              <Checkbox value="300to400">$300 - $400</Checkbox>
              <Checkbox value="400to500">$400 - $500</Checkbox>
              <Checkbox value="500to600">$500 - $600</Checkbox>
              <Checkbox value="600plus">$600 +</Checkbox>
            </VStack>
          </CheckboxGroup>
          <Divider spacing={8} />

          {/* Release Date*/}
          <CheckboxGroup
            //colorScheme="colors.secondary.500"
            color="colors.gray.500"
            alignItems="left"
          >
            <VStack spacing={[1, 3]} color="colors.gray.500" align>
              <Text to="Footwear" className="filter-category-link">
                Release dates
              </Text>
              <Checkbox value="2022-2021"> 2022 - 2021</Checkbox>
              <Checkbox value="2021-2020"> 2021 - 2020</Checkbox>
              <Checkbox value="2020-2019"> 2020 - 2019</Checkbox>
              <Checkbox value="2019-2018"> 2019 - 2018</Checkbox>
              <Checkbox value="2018-2017"> 2018 - 2017</Checkbox>
              <Checkbox value="2017-2016"> 2017 - 2016</Checkbox>
              <Checkbox value="2016-2015"> 2016 - 2015</Checkbox>
              <Checkbox value="2015-2014"> 2015 - 2014</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
      </VStack>

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
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Xchange</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Markets</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Sneakers</BreadcrumbLink>
            </BreadcrumbItem>
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
    </HStack>
  );
};
