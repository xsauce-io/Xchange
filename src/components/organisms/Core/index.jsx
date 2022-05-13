import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { MintingCell } from "../../molecule/MintingCell/index.js";
import { PriceChartGraph } from "../../molecule/PriceChartGraph/index.js";
import { ProductCell } from "../../molecule/ProductCell";
import { ProductDescriptionCell } from "../../molecule/ProductDescriptionCell";

export const Core = () => {
  return (
    <Box w="100%" minHeight="fit-content">
      {/* Core Header Section */}
      <Flex flexDirection="column">
        <Box bg="colors.primary.900" padding={1}>
          <Button
            leftIcon={<ArrowBackIcon />}
            color="colors.gray.500"
            bg="colors.primary.900"
            borderRadius={0}
            size="xs"
            fontSize="xs"
          >
            Go Back
          </Button>
        </Box>
        <Box bg="colors.primary.900">
          <Flex flexDirection="column" paddingBottom={5}>
            <Heading
              color="colors.white"
              fontSize="7xl"
              fontWeight={400}
              marginTop={1}
              marginBottom={1}
            >
              Xchange
            </Heading>
            <Box width={140} height={1} bg="colors.secondary.500" />
          </Flex>
        </Box>

        {/* Core Body Section */}
        <Box bg="colors.primary.900">
          <Tabs>
            <TabList borderBottomWidth={1} color="colors.gray.500">
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                Portfolio
              </Tab>
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                Markets
              </Tab>
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                Swaps
              </Tab>
            </TabList>

            <TabPanels
              color="colors.gray.500"
              isLazy
              width="100%"
              minHeight="1300px"
              height="fit-content"
            >
              {/* Portfolio Tab */}
              <TabPanel paddingLeft={0} paddingRight={0}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                  <GridItem colSpan={3} h="10">
                    <ProductCell width="100%" />
                    <PriceChartGraph height={300} />
                  </GridItem>
                  <GridItem colStart={4} colEnd={6} h="10">
                    <MintingCell width="530px" />
                    <ProductDescriptionCell width="530px" />
                  </GridItem>
                </Grid>
              </TabPanel>

              {/* Market Tab */}
              <TabPanel paddingLeft={0} paddingRight={0} paddingTop={8}>
                <Box
                  border="1px solid"
                  borderColor="colors.gray.700"
                  width="100%"
                  height={500}
                  borderRadius={20}
                  padding={4}
                >
                  <p>Market</p>
                </Box>
              </TabPanel>
              {/* Swaps Tab */}
              <TabPanel paddingLeft={0} paddingRight={0}>
                <Box
                  border="1px solid"
                  borderColor="colors.gray.700"
                  width="100%"
                  height={500}
                  borderRadius={20}
                  padding={4}
                >
                  <p>Swaps</p>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};
