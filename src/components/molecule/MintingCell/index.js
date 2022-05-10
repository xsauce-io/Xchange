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
      borderColor="colors.grey"
      borderRadius={10}
    >
      <Box>
        <Text color="colors.white" fontSize={40}>
          XJ1 Retro Chicago <br /> 2022 first edition
        </Text>
      </Box>
      <Divider color="color.darkgrey" />

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
            <Text color="colors.grey" fontSize={12}>
              Retail Price for xAsset
            </Text>
            <Box display={"inline-flex"} flexDirection="row">
              <Box
                bg="colors.green"
                color="colors.dark"
                fontSize={10}
                padding={1}
                borderRadius={5}
              >
                <ArrowUpIcon />
                $891.60
              </Box>
              <Text color="colors.grey" fontSize={10} alignSelf={"center"}>
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
            <Text fontSize={12} color="colors.white">
              $889.23
            </Text>
          </Box>
        </Flex>
        <Divider color="colors.darkgrey" />
        <Spacer />
        {/* Release Date Section  */}
        <Flex width="100%">
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text fontSize={12}>Last Sale on this xAsset</Text>
          </Box>
          <Spacer />
          <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
            <Text color="colors.white" fontSize={12}>
              $889.23
            </Text>
          </Box>
        </Flex>
        <Divider color="color.darkgrey" />
      </Box>

      <Flex flexDirection="row" paddingBottom={5} paddingTop={5}>
        {/*This "double button will be removed later*/}
        <Flex bg="colors.darkgrey" borderRadius={5} width="100%">
          <Button
            flex={1}
            bg="colors.green"
            color="colors.darkgrey"
            height={63}
          >
            Long 2x
          </Button>
          <Button
            flex={1}
            bg="colors.darkgrey"
            color="colors.white"
            height={63}
          >
            Short 2x
          </Button>
        </Flex>
      </Flex>

      <Box width="100%">
        <Flex border="1px solid" borderRadius={10} padding={4}>
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
        <Text fontSize={10}>Balance 2,333,333 DAI</Text>
      </Box>

      <Button
        bg="colors.green"
        color="colors.darkgrey"
        fontSize={16}
        height={53}
      >
        Mint Short Position
      </Button>
    </VStack>
  );
};
