import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Portfolio = () => {
  return (
    <HStack
      spacing={5}
      border="1px solid"
      borderRadius="xl"
      borderColor="colors.primary.700"
      background={"colors.secondary.500"}
      padding={5}
      alignItems="flex-start"
    >
      <VStack width={"33%"} spacing={5}>
        <Box
          height={"33%"}
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={10}
          textAlign="left"
          background={"colors.primary.900"}
        >
          Wallet Information: <br /> Address <br /> Amount of Txns <br /> Date
          Joined
        </Box>
        <Box
          height={"33%"}
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="left"
          background={"colors.primary.900"}
        >
          Accrued Sauce
        </Box>
        <Box
          height={"33%"}
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
          background={"colors.primary.900"}
        >
          Recent Trades
          <VStack border={"0.5px solid}"} bg={"colors.gray.700"} padding={1}>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
      <VStack width={"33%"}>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="left"
          background={"colors.primary.900"}
        >
          <Flex flexDirection={"rows"}>
            <Text>Portfolio Value</Text>
            <Spacer />
            <Text>$122.22 DAI</Text>
          </Flex>
        </Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
          background={"colors.primary.900"}
        >
          Active Positions
        </Box>
      </VStack>
      <VStack width={"33%"}>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="left"
          background={"colors.primary.900"}
        >
          <Flex flexDirection={"rows"}>
            <Text>DAI Balance</Text>
            <Spacer />
            <Text>$144.22 DAI</Text>
          </Flex>
        </Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
          background={"colors.primary.900"}
        ></Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
          background={"colors.primary.900"}
        >
          Total Returns
          <VStack border={"0.5px solid}"} bg={"colors.gray.700"} padding={1}>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
            <Flex flexDirection={"rows"} width={"90%"}>
              <Text fontSize={"xs"}>DAI Balance</Text>
              <Spacer />
              <Text fontSize={"xs"}>$144.22 DAI</Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </HStack>
  );
};

/* 
    <Flex flexDirection={"rows"}>
        <Text>DAI Balance</Text>
        <Spacer />
        <Text>$1.22 DAI</Text>
    </Flex> 
*/
