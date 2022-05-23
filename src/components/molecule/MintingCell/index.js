import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { parseEther } from "ethers/lib/utils";
import React, { useCallback, useState } from "react";
import { useAuthContext } from "../../../context";

/*
Props:
    height: number
    width: number
*/

export const MintingCell = ({ width, height, product }) => {
  const [isYes, setIsYes] = useState(true);
  const [canRedeem, setCanRedeem] = useState(false);
  const { daiContract, address, contract } = useAuthContext();

  const setCanRedeemYes = () => {
    setCanRedeem(true);
  };

  const printButtonLabel = (event) => {
    console.log(event.target.value);
    if (event.target.value === "YES") {
      setIsYes(true);
    } else if (event.target.value === "NO") {
      setIsYes(false);
    }
  };

  const enterContract = useCallback(async (answer) => {
    await daiContract.approve(
      "0x175f9d9bBc1937D0B1243f605141991bcCc10905",
      parseEther("20")
    );

    await contract.enter(parseEther("10"), answer);
  }, []);

  const claim = useCallback(async () => {
    await contract.claim();
  }, []);

  // const getDaiBalance = useCallback(async () => {
  //   if (daiContract) {
  //     const balance = await daiContract.balanceOf(address);
  //     console.log({ balance });
  //     return BigNumber.from(balance).toString();
  //   }

  //   return 0;
  // }, [daiContract]);

  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={width}
      height={height}
      minHeight="fit-content"
      bg="colors.primary.900"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.700"
      borderRadius={"xl"}
    >
      <Box>
        <Text color="colors.white" fontSize={"3xl"} whiteSpace="normal">
          {/* {product.name} */}
          Will the price of {product.name} be equal or above to 300USD by May
          22nd 2022?
        </Text>
        <Text
          color="colors.gray.500"
          fontSize={"md"}
          whiteSpace="normal"
          textAlign={"center"}
          padding={4}
        >
          {/* {product.name} */}
          Status: Open
        </Text>
      </Box>
      <Divider color="colors.gray.700" />

      {/* Price Statistics Section */}
      {/* <Box>
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
            <Text color="colors.white" fontSize={"md"}>
              YES
            </Text>
            <Text color="colors.gray.500" fontSize={"sm"}>
              Probability: 10.00%
            </Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize={"sm"} color="colors.white">
              My balance: {0} DAI
            </Text>
          </Box>
        </Flex>
        <Spacer />
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
            <Text color="colors.white" fontSize={"md"}>
              NO
            </Text>
            <Text color="colors.gray.500" fontSize={"sm"}>
              Probability: 90.00%
            </Text>
          </Box>
          <Spacer />
          <Box
            justifyContent="center"
            alignSelf="center"
            paddingBottom={3}
            paddingTop={3}
          >
            <Text fontSize={"sm"} color="colors.white">
              My balance: 10 DAI
            </Text>
          </Box>
        </Flex>
      </Box> */}

      {/*
       Retail price Section
       <Box>
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
        {/* Last Sale Section  
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
      </Box> */}
      {/* 
      <Box paddingBottom={5} paddingTop={5}>
        <Box
          display={"flex"}
          borderRadius={"xl"}
          width="100%"
          bg="colors.gray.700"
          sizes={"md"}
          height={"63px"}
        >
          <ButtonGroup buttons={["YES", "NO"]} onClick={printButtonLabel} />
        </Box>
      </Box> */}

      {/* <Box width="100%" paddingBottom={5} paddingTop={5}>
        <InputGroup size="lg">
          <InputLeftAddon bg={"orange"} color="colors.white">
            DAI
          </InputLeftAddon>
          <Input placeholder="00.00" textAlign={"right"} />
          <InputRightAddon bg={"colors.gray.500"} color="colors.white">
            MAX
          </InputRightAddon>
        </InputGroup>
        <Text fontSize={"xs"} paddingBottom={2} paddingTop={2}>
          Balance: 0 DAI
        </Text>
      </Box> */}
      {/* <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"}>
        Mint
      </Button> */}

      <HStack>
        <Button
          flex={2}
          onClick={() => enterContract(1)}
          variant={"flashy"}
          size={"md"}
          height={53}
          fontWeight={"bold"}
          whiteSpace={"normal"} 
        >
          Buy Yes Position
        </Button>
        <Button
          flex={2}
          variant={"flashy"}
          onClick={() => enterContract(2)}
          size={"md"}
          height={53}
          fontWeight={"bold"}
          whiteSpace={"normal"} 

        >
          Buy No Position
        </Button>
        <Button
          flex={1}
          variant="dimmy"
          size={"md"}
          height={53}
          onClick={claim}
          fontWeight={"bold"}
          width={"50%"}
          // isDisabled={canRedeem ? false : true}
          alignSelf={"center"}
          whiteSpace={"normal"} 

        >
          Redeem
        </Button>
      </HStack>
    </VStack>
  );
};
