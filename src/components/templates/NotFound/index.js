import { Box, Text } from "@chakra-ui/react";
import React from "react";

/*
--------  NotFound Component -----
* @Description : 
*  NotFound is a page used by the router as a fallback.
*/

const NotFound = () => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/
  return (
    <React.Fragment>
      <Box
        minHeight="fit-content"
        textAlign={"center"}
        justifySelf={"center"}
        alignSelf={"center"}
      >
        <Text fontSize={"xx-large"} color={"#ACFF00"}>
          Error 404: Page not found.
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default NotFound;