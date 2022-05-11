import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// Import Swiper styles
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../App.css";
/*
Props:
    height: number
    width: number
*/

export const ProductCell = (props) => {
  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={props.width}
      height={props.height}
      maxWidth="100%"
      minW={350}
      minHeight="fit-content"
      bg="colors.dark"
      alignItems="left"
      border="1px solid"
      borderColor="colors.grey"
      borderRadius={10}
    >
      <Box padding={4}>
        <Text color="colors.white" fontSize={20}>
          Sneaker xAssets
        </Text>
        <Breadcrumb fontSize={12}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Xchange</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Markets</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Sneakers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">
              XJ1 Retro Chicago 2022 first edition
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box
        bg="colors.dark"
        alignItems="left"
        padding={12}
        border="1px solid"
        width="100%"
        borderColor="colors.grey"
        borderRadius={10}
      >
        <Text color="colors.white" fontSize={24}>
          XJ1 Retro Chicago 2022 first edition
        </Text>
        <Box height={400}>
          <Slider
            dots="true"
            infinite=" true"
            speed="500"
            slidesToShow={1}
            slidesToScroll={1}
            height={400}
          >
            <Box height={400} w="100%" bg="colors.green" textAlign="center">
              <Text fontSize={40} color="colors.white">
                1
              </Text>
            </Box>
            <Box height={400} w="100%" bg="colors.green" textAlign="center">
              <Text fontSize={40} color="colors.white">
                2
              </Text>
            </Box>{" "}
            <Box height={400} w="100%" bg="colors.green" textAlign="center">
              <Text fontSize={40} color="colors.white">
                3
              </Text>
            </Box>
          </Slider>
        </Box>
      </Box>
    </VStack>
  );
};
