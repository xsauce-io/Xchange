/* eslint-disable no-unused-vars */
import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Spacer, Text, VStack } from "@chakra-ui/react";
import { parseEther } from "ethers/lib/utils";
import PropTypes from 'prop-types';
import React, { useCallback, useState } from "react";
import { useAuthContext } from "../../../context";
import ButtonGroup from "../../atomic/ButtonGroup";
/*
--------  MintingCell Component -----
* @Description : 
*  MintingCell the core cell of the minting functionality.
*/

export const MintingCell = ({ width, height, product }) => {
  const [isLong, setIsLong] = useState(true);
  const [canRedeem, setCanRedeem] = useState(false);
  const { daiContract, address, contract } = useAuthContext();

  const setCanRedeemYes = () => {
    setCanRedeem(true);
  };

  const printButtonLabel = (event) => {
    console.log(event.target.value);
    if (event.target.value === "1") {
      setIsLong(true);
    } else if (event.target.value === "2") {
      setIsLong(false);
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

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <VStack
        marginTop={0}
        marginBottom={1}
        width={width}
        height={height}
        maxHeight={"600px"}
        minHeight="fit-content"
        bg="colors.primary.900"
        alignItems="left"
        padding={12}
        border="1px solid"
        borderColor="colors.gray.700"
        borderRadius={"xl"}
      >
        <Box>
          <Text color="colors.white" fontSize={"3xl"} whiteSpace="normal" textAlign={'center'}>
            {product.name}
          </Text>
        </Box>
        <Divider color="colors.gray.500" />
        {/* Retail price Section */}
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
                $889.25
              </Text>
            </Box>
          </Flex>
          <Spacer />
          {/* Last Sale Section */}
          <Flex
            width="100%"
            borderBottom={"1px solid"}
            borderColor="colors.gray.700"
          >
            <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
              <Text fontSize={"sm"} color="colors.gray.500">Last Sale on this xAsset</Text>
            </Box>
            <Spacer />
            <Box justifyContent={"center"} paddingBottom={3} paddingTop={3}>
              <Text color="colors.white" fontSize={"sm"}>
                $889.23
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box paddingBottom={5} paddingTop={5}>
          <Box
            display={"flex"}
            borderRadius={"xl"}
            width="100%"
            bg="colors.gray.700"
            height={"50px"}
          >
            <ButtonGroup buttons={[{ value: 1, name: "Yes" }, { value: 2, name: "No" }]} onClick={printButtonLabel} />
          </Box>
        </Box>

        <Box width="100%" paddingBottom={5} >
          <InputGroup size="lg">
            <InputLeftAddon bg={"orange"} color="colors.white">
              DAI
            </InputLeftAddon>
            <Input placeholder="00.00" textAlign={"right"} />
            <InputRightAddon bg={"colors.gray.500"} color="colors.white">
              MAX
            </InputRightAddon>
          </InputGroup>
          <Text fontSize={"xs"} paddingTop={2} color={"colors.gray.500"}>
            Balance: 0 DAI
          </Text>
        </Box>
        <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"} paddingBottom={4}>
          {isLong ? "Mint Yes Position" : "Mint No Position"}
        </Button>
      </VStack>
    </React.Fragment >
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

MintingCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  product: PropTypes.object,
};


export default MintingCell;