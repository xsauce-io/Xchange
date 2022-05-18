import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

/*
Props:
    height: number
    width: number
*/

export const StakingCard = (props) => {
  const { h, w, height, width, price, title, subTitle, imgSrc } = props;
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
      <AspectRatio width="100%" height="45%">
        <Image
          src={
            imgSrc === undefined ? "https://via.placeholder.com/150" : imgSrc
          }
        />
      </AspectRatio>
      <Box padding={5} maxH={"55%"}>
        <Box>
          <Text fontSize="xl" color="colors.white" lineHeight="normal">
            {title === undefined ? "XJ1 Retro Chicago 2022 Edition" : title}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="colors.gray.500" marginTop={1}>
            {subTitle === undefined ? "Retro White Black (2021)" : subTitle}
          </Text>
        </Box>

        <Flex marginTop={2} marginBottom="auto" flexBasis={"100%"} maxH={"15%"}>
          <Text
            fontSize="md"
            width={"50%"}
            height={"100%"}
            color="colors.gray.500"
          >
            {price === undefined ? "$400.90" : price}
          </Text>
          <Spacer />

          <Link
            to="/xchange/markets/category/productId"
            className="staking-card-link"
          >
            More Details
            <ArrowForwardIcon />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
