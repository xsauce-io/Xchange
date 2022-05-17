import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";

/*
Props:
    height: number
    width: number
    price, title, subTitle
*/

export const SwapCell = (props) => {
  const { h, w, height, width } = props;
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
      alignItem={"center"}
    >
      <Box padding={5} maxH={"25%"}>
        <Box>
          <Text fontSize="4xl" color="colors.white" lineHeight="normal">
            Swap
          </Text>
        </Box>

        <Flex
          marginTop={6}
          marginBottom="auto"
          flexBasis={"100%"}
          paddingLeft={10}
          paddingRight={10}
        >
          <InputGroup>
            <Input
              width={"90%"}
              type="number"
              placeholder="amount"
              bg={"colors.gray.100"}
              color={"colors.primary.900"}
            />
            <InputRightAddon children="MAX" />
          </InputGroup>
          <Button
            width={"50%"}
            variant="flashy"
            height={"100%"}
            fontSize={"sm"}
          >
            Swap Assets
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
