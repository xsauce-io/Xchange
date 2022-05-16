import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const NotFound = () => {
  return (
    <Box
      minHeight="fit-content"
      textAlign={"center"}
      justifySelf={"center"}
      alignSelf={"center"}
    >
      <Text fontSize={"xx-large"} color={"#ACFF00"}>
        Error 404: Page not found.
      </Text>
    </Box>
  );
};
