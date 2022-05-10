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
import theme from "../../../utils/theme/theme";
import { ProductDescriptionCell } from "../../molecule/ProductDescriptionCell";

export const Core = () => {
  return (
    <Box w="100%" minHeight="fit-content">
      {/* Core Header Section */}
      <Flex flexDirection="column">
        <Box bg={theme.colors.dark} padding={1}>
          <Button
            leftIcon={<ArrowBackIcon />}
            color={theme.colors.grey}
            bg={theme.colors.dark}
            borderRadius={0}
            size="xsm"
            fontSize={12}
          >
            Go Back
          </Button>
        </Box>
        <Box bg={theme.colors.dark}>
          <Flex flexDirection="column" paddingBottom={5}>
            <Heading
              color={theme.colors.white}
              fontSize={64}
              fontWeight={400}
              marginTop={1}
              marginBottom={1}
            >
              Xchange
            </Heading>
            <Box width={140} height={1} bg={theme.colors.green} />
          </Flex>
        </Box>

        {/* Core Body Section */}
        <Box bg={theme.colors.dark}>
          <Tabs>
            <TabList borderBottomWidth={1} color={theme.colors.grey}>
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
              color={theme.colors.grey}
              isLazy
              width="100%"
              minHeight="1300px"
              height="fit-content"
            >
              {/* Portfolio Tab */}
              <TabPanel paddingLeft={0} paddingRight={0}>
                <Box
                  border="1px solid"
                  borderColor={theme.colors.darkgrey}
                  width="100%"
                  height={500}
                  borderRadius={20}
                  padding={4}
                >
                  <p>PortFolio</p>
                </Box>
              </TabPanel>

              {/* Market Tab */}
              <TabPanel paddingLeft={0} paddingRight={0} paddingTop={8}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                  <GridItem colSpan={3} h="10" bg="tomato" />
                  <GridItem colStart={4} colEnd={6} h="10">
                    <ProductDescriptionCell width="530px" />
                  </GridItem>
                </Grid>
              </TabPanel>
              {/* Swaps Tab */}
              <TabPanel paddingLeft={0} paddingRight={0}>
                <Box
                  border="1px solid"
                  borderColor={theme.colors.darkgrey}
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
