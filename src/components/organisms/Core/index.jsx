import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../../utils/theme/theme";

export const Core = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column">
        <Box bg={theme.colors.dark} padding={1}>
          <Button color={theme.colors.grey} bg="none" size="xsm" fontSize={12}>
            Go back
          </Button>
        </Box>
        <Box bg={theme.colors.dark}>
          <Flex flexDirection="column" paddingBottom={5}>
            <Heading
              color={theme.colors.white}
              size="xl"
              fontWeight={400}
              marginTop={1}
              marginBottom={1}
            >
              Xchange
            </Heading>
            <Box width={140} height={1} bg={theme.colors.green} />
          </Flex>
        </Box>
        <Box bg={theme.colors.dark}>
          <Tabs>
            <TabList
              borderBottomWidth={1}
              color={theme.colors.grey}
              fontFamily="Futura"
            >
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                PortFolio
              </Tab>
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                Markets
              </Tab>
              <Tab _selected={{ color: "white" }} padding={2} fontSize={16}>
                Swaps
              </Tab>
            </TabList>

            <TabPanels color={theme.colors.grey}>
              <TabPanel>
                <p>PortFolio</p>
              </TabPanel>
              <TabPanel>
                <p>Markets</p>
              </TabPanel>
              <TabPanel>
                <p>Swaps</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};
