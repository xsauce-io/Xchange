import { Box, Text } from "@chakra-ui/react";
import React from "react";

/*
--------  Xhibit Component -----
* @Description : 
*  Core Page for the Xhibit feature and /xhibit endpoint
*/

const Xhibit = () => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <Box w="100%" height={"500px"}>
        <Text color={"colors.white"}>Hey I am the Xhibit page </Text>
      </Box>
    </React.Fragment>
  );
};

export default Xhibit;