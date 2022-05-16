import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Markets = () => {
  return (
    <Box w="100%" minHeight="fit-content">
      <Text color={"colors.white"}>
        Hey I am the Market page with all the products.
      </Text>
      <Link to="category/XJ1-Retr-Chicago-2022-first-editions">
        <Button variant={"flashy"}>
          Click me to see the template for the product page
        </Button>
      </Link>
    </Box>
  );
};
