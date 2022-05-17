import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

export const Portfolio = () => {
  return (
    <HStack
      spacing={5}
      border="1px solid"
      borderRadius="xl"
      borderColor="colors.primary.700"
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
          padding={5}
          textAlign="center"
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
        >
          Accrud Sauce
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
        >
          Recent Trades
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
        >
          Portfolio <span /> $122.22
        </Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
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
        >
          DAI Balance <span /> $1.22 DAI
        </Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
        ></Box>
        <Box
          width={"100%"}
          border="1px solid"
          borderRadius="xl"
          borderColor="colors.primary.700"
          color={"colors.white"}
          padding={5}
          textAlign="center"
        >
          Total Returns
        </Box>
      </VStack>
    </HStack>
  );
};
