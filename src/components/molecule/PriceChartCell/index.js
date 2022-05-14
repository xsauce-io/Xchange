import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../App.css";
import PriceChartGraph from "../PriceChartGraph";
/*
  Props:
      height: number
      width: number
  */

export const PriceChartCell = (props) => {
  return (
    <VStack
      marginTop={0}
      width={props.width}
      height={props.height}
      maxWidth="100%"
      minW={350}
      bg="colors.primary.900"
      alignItems="left"
      border="1px solid"
      borderColor="colors.gray.500"
      borderRadius="xl"
    >
      {/*Cell Heading  */}

      <Flex padding={4}>
        <Text color="colors.white" fontSize="xl">
          Pie Chart
        </Text>
        <Spacer />
        <HStack>
          <Button size="xs" variant="outline">
            1 D
          </Button>
          <Button size="xs" variant="outline">
            1 W
          </Button>
          <Button size="xs" variant="outline">
            1 M
          </Button>
          <Button size="xs" variant="outline">
            3 M
          </Button>
          <Button size="xs" variant="outline">
            1 Y
          </Button>
          <Button size="xs" variant="outline">
            MAX
          </Button>
        </HStack>
      </Flex>

      <Box
        bg="colors.primary.900"
        alignItems="left"
        padding={12}
        border="1px solid"
        width="100%"
        height={"100%"}
        borderColor="colors.gray.500"
        borderRadius="xl"
      >
        <Text color="colors.white" fontSize="md">
          XJ1 Retro Chicago 2022 first edition
        </Text>
        <Box justifyContent="center" textAlign={"left"}>
          <Text color="colors.gray.500" fontSize={"sm"}>
            Retail Price for xAsset
          </Text>
          <Box display={"inline-flex"} flexDirection="row" marginBottom={4}>
            <Box
              bg="colors.secondary.500"
              color="colors.primary.900"
              fontSize={10}
              padding={1}
              borderRadius={"md"}
            >
              <TriangleUpIcon />
              $891.60
            </Box>
            <Text color="colors.gray.500" fontSize={"sm"} alignSelf={"center"}>
              &nbsp; Last 6 days
            </Text>
          </Box>
        </Box>
        <PriceChartGraph />
      </Box>
    </VStack>
  );
};
