import { ArrowUpIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

/*
Props:
    height: number
    width: number
*/

export const MintingCell = (props) => {
  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={props.width}
      height={props.height}
      maxWidth="100%"
      minW={250}
      minHeight="fit-content"
      bg="colors.dark"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.500"
      borderRadius={10}
    >
      <Box>
        <Text color="colors.white" fontSize={"4xl"}>
          XJ1 Retro Chicago <br /> 2022 first edition
        </Text>
      </Box>
      <Divider color="colors.gray.700" />

      {/* Price Statistics Section */}
      <Box>
        {/* All time high Section  */}
        <Flex width="100%">
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
                <ArrowUpIcon />
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
        <Divider color="colors.gray.700" />
        <Spacer />
        {/* Release Date Section  */}
        <Flex width="100%">
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
        <Divider color="colors.gray.700" />
      </Box>

      <Flex flexDirection="row" paddingBottom={5} paddingTop={5}>
        {/*This "double button will be removed later*/}
        <Flex borderRadius={"xl"} width="100%" bg="colors.gray.700">
          <Button
            flex={1}
            sizes={"md"}
            //TODO: implement custom button group
            //variant={"solid"}
            bg="colors.gray.700"
            color="colors.white"
            height={63}
            //focus
          >
            Long 2x
          </Button>
          <Button flex={1} sizes={"md"} variant={"flashy"} height={63}>
            Short 2x
          </Button>
        </Flex>
      </Flex>

      <Box width="100%" paddingBottom={5}>
        <Flex border="1px solid" borderRadius="xl" padding={4}>
          <QuestionIcon color="orange" alignSelf="center" />
          <Text color="colors.white">
            <pre> DAI</pre>
          </Text>
          <Spacer />
          <Text>
            <pre>923 </pre>{" "}
          </Text>
          <Text>MAX</Text>
        </Flex>
        <Text fontSize={"xs"} paddingBottom={2} paddingTop={2}>
          Balance: 2,333,333 DAI
        </Text>
      </Box>

      <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"}>
        Mint Short Position
      </Button>
    </VStack>
  );
};
