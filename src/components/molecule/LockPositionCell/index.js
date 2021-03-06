import {
  Box, Button, Input, InputGroup, InputLeftAddon, InputRightAddon, Text,
  VStack
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";

/*
--------  LockPositionCell Component -----
* @Description : 
*  LockPositionCell is used by the Minting Cell.
*  TODO: Create column float left and right component 
*/

export const LockPositionCell = ({ width, height }) => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <VStack
        marginTop={0}
        width={width}
        height={height}
        bg="colors.primary.900"
        alignItems="left"
        padding={16}
        border="1px solid"
        borderColor="colors.gray.700"
        borderRadius={"xl"}
        color="colors.white"

      >
        <Box width="70%" alignSelf={"center"}>
          <Box paddingBottom={5}>
            <Text color="colors.white" fontSize="4xl">
              Lock Position
            </Text>
          </Box>
          <Box width="100%" paddingBottom={5} paddingTop={5}  >
            <InputGroup size="lg" >
              <InputLeftAddon bg={"colors.primary.900"} color="colors.white" borderRight={"0px"} borderColor={"colors.gray.500"}>
                DAI
              </InputLeftAddon>
              <Input placeholder="00.00" textAlign={"right"} borderRight={"0px"} borderLeft={"0px"} borderColor={"colors.gray.500"} />
              <InputRightAddon bg={"colors.primary.900"} color="colors.white" borderLeft={"0px"} borderColor={"colors.gray.500"}>
                MAX
              </InputRightAddon>
            </InputGroup>
            <Text fontSize={"xs"} paddingBottom={2} paddingTop={2} color={"colors.gray.500"}>
              Balance: 0 DAI
            </Text>
          </Box>
          <Button variant={"flashy"} size={"md"} height={53} fontWeight={"bold"} width={"100%"}>
            Mint
          </Button>
        </Box>
      </VStack>
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

LockPositionCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LockPositionCell;