import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";


/*
--------  SwapCell Component -----
* @Description : 
* Cell to Swap an asset
* Used in Swap Component
*/

const SwapCell = ({ h, w, height, width }) => {


  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <Box
        bg="colors.primary.900"
        alignItems="left"
        borderRadius="xl"
        border="1px solid"
        w={w || width}
        h={h || height}
        color="colors.gray.700"
        overflow="hidden"
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
              <InputRightAddon  >MAX</InputRightAddon>
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
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

SwapCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SwapCell;