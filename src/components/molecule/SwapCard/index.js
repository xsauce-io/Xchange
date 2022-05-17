import { AspectRatio, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

/*
Props:
    height: number
    width: number
*/

export const SwapCard = (props) => {
  const { h, w, height, width, price, title, imgSrc } = props;
  return (
    <Box
      bg="colors.primary.900"
      alignItems="left"
      borderRadius="xl"
      border="1px solid"
      w={w || width}
      h={h || height}
      color="colors.gray.700"
      overflow="hidden"
    >
      <AspectRatio width="100%" height="75%">
        <Image
          padding={10}
          src={
            imgSrc === undefined ? "https://via.placeholder.com/150" : imgSrc
          }
        />
      </AspectRatio>
      <Box padding={5} maxH={"25%"}>
        <Flex>
          <Text fontSize="xl" color="colors.white" lineHeight="normal">
            {title === undefined ? "XJ1 Retro Chicago 2022 Edition" : title}
          </Text>
          <Spacer />
          <Text
            fontSize="sm"
            height={"100%"}
            color="colors.white"
            textAlign={"right"}
          >
            {price === undefined ? "$445.90" : price}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
