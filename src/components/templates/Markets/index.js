import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  CheckboxGroup, Stack, Text,
  VStack,
  WrapItem
} from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Divider from "../../atomic/Divider";
import { StakingCard } from "../../molecule/StakingCard";

/*
--------  Markets Component -----
* @Description : 
* Cell to Swap an asset
* Used in Swap Component
*/

export const Markets = () => {

  // Create multiple staking cards
  var items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <WrapItem>
        <StakingCard w="217px" h="274px" />
      </WrapItem>
    );
  }

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={5} marginBottom="3%">
        <VStack
          marginTop={0}
          minHeight="fit-content"
          bg="colors.primary.900"
          alignItems="left"
          alignSelf="flex-start"
          minWidth={"fit-content"}
        >
          {/* Filters */}
          {/* Category*/}
          <Box width={200} minHeight={"fit-content"}>
            <Box>
              <NavLink
                to="/xchange/markets/footwear"
                className="filter-category-link"
                activeclassname="filter-category-link-active"
              >
                <Text>Footwear</Text>
              </NavLink>
              <NavLink
                to="/xchange/markets/sneakers"
                className="filter-category-link"
                activeclassname="filter-category-link-active"
              >
                <Text>Sneakers</Text>
              </NavLink>
              <NavLink
                to="/xchange/markets/watches"
                className="filter-category-link"
                activeclassname="filter-category-link-active"
              >
                <Text>Watches</Text>
              </NavLink>
              <NavLink
                to="/xchange/markets/bags"
                className="filter-category-link"
                activeclassname="filter-category-link-active"
              >
                <Text>Bags</Text>
              </NavLink>
              <NavLink
                to="/xchange/markets/nft"
                className="filter-category-link"
                activeclassname="filter-category-link-active"
              >
                <Text>NFT</Text>
              </NavLink>
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

        <Outlet />
      </Stack>
    </React.Fragment >
  );
};



export default Markets;