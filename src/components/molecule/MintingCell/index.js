import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";

/*
Props:
    height: number
    width: number
*/

export const MintingCell = ({ width, height, product }) => {
  // const [isLong, setIsLong] = useState(true);
  // const printButtonLabel = (event) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "Long 2x") {
  //     setIsLong(true);
  //   } else if (event.target.value === "Short 2x") {
  //     setIsLong(false);
  //   }
  // };

  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={width}
      height={height}
      minW="fit-content"
      minHeight="fit-content"
      bg="colors.primary.900"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.700"
      borderRadius={"xl"}
    >
      <Box>
        <Text color="colors.white" fontSize={"4xl"} whiteSpace="normal">
          {product.name}
        </Text>
      </Box>
      <Divider color="colors.gray.700" />

      {/* Price Statistics Section */}
      <Box>
        {/* All time high Section  */}
        <Flex
          width="100%"
          borderBottom={"1px solid"}
          borderColor="colors.gray.700"
        >
          <Box
            justifyContent="center"
            paddingBottom={3}
            paddingTop={3}
            textAlign={"left"}
          >
            <Text color="colors.gray.500" fontSize={"sm"}>
              Retail Price for xAsset
            </Text>
            <Box display={"inline-flex"} flexDirection="row">
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
              <Text
                color="colors.gray.500"
                fontSize={"sm"}
                alignSelf={"center"}
              >
                &nbsp; Last 6 days
              </Text>
            </Box>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize={"sm"} color="colors.white">
              $889.23
            </Text>
          </Box>
        </Flex>
        <Spacer />
        {/* Release Date Section  */}
        <Flex
          width="100%"
          borderBottom={"1px solid"}
          borderColor="colors.gray.700"
        >
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text fontSize={"sm"}>Last Sale on this xAsset</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text color="colors.white" fontSize={"sm"}>
              $889.23
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* <Box paddingBottom={5} paddingTop={5}>

         <Box
          display={"flex"}
          borderRadius={"xl"}
          width="100%"
          bg="colors.gray.700"
          sizes={"md"}
          height={"63px"}
        >
          <ButtonGroup
            buttons={["Long 2x", "Short 2x"]}
            onClick={printButtonLabel}
          />
        </Box> 
      </Box> */}

      <Box width="100%" paddingBottom={5} paddingTop={5}>
        <InputGroup size="lg">
          <InputLeftAddon
            bg={"colors.primary.900"}
            color="colors.gray.500"
          >DAI</InputLeftAddon>
          <Input placeholder="00.00" textAlign={"right"} />
          <InputRightAddon bg={"colors.primary.900"} >MAX</InputRightAddon>
        </InputGroup>
        <Text fontSize={"xs"} paddingBottom={2} paddingTop={2}>
          Balance: 2,333,333 DAI
        </Text>
      </Box>
      <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"}>
        Mint
      </Button>

      {/* <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"}>
      {isLong ? "Mint Long Position" : "Mint Short Position"}
    </Button> */}
    </VStack>
  );
};
