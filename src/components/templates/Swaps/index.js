import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import SwapCard from "../../molecule/SwapCard";
import SwapCell from "../../molecule/SwapCell";

/*
--------  Swaps Component -----
* @Description : 
*  Swaps core component for the swapping feature.
*/

const Swaps = () => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/
  return (
    <React.Fragment>
      <VStack spacing={8}>
        <Flex w="100%">
          <SwapCard h={509} w={528} />
          <Spacer />
          <ArrowLeftIcon color={"colors.secondary.500"} alignSelf="center" />
          <Spacer />
          <ArrowRightIcon color={"colors.secondary.500"} alignSelf="center" />
          <Spacer />
          <SwapCard h={509} w={528} />
        </Flex>
        <Flex w="100%">
          <SwapCell h={170} w={"100%"} />
        </Flex>
      </VStack>
    </React.Fragment>
  );
};

export default Swaps;