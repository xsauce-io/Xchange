import { CopyIcon } from "@chakra-ui/icons";
import { Button, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

import PropTypes from 'prop-types';

/*
--------  Connect Wallet Component -----
* @Description : 
* Button to allow user to connect to wallet. 
* The component access authContext variable.
*/

const ConnectWallet = ({ variant, fontSize, height, width, borderRadius, bg, padding }) => {
  const { connecting, address, connectWallet } = useAuthContext();

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      {connecting ? (
        <Spinner />
      ) : address ? (
        <Button
          variant={variant}
          fontSize={fontSize}
          height={height}
          padding={padding}
          width={width}
          borderRadius={borderRadius}
          bg={bg}
        //onclick it will copy
        >
          <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            {address}
          </Text>
          <CopyIcon color="colors.secondary.500"></CopyIcon>
        </Button>
      ) : (
        <Button
          variant={variant}
          fontSize={fontSize}
          height={height}
          padding={padding}
          width={width}
          borderRadius={borderRadius}
          onClick={connectWallet}
          bg={bg}
        >
          Connect Wallet
        </Button>
      )
      }
    </React.Fragment >
  );
};


ConnectWallet.defaultProps = {
  variant: "outline",
  fontSize: "xs",
  height: "0px",
  width: "140px",
  borderRadius: "2xl",
  bg: "colors.primary.900",
  padding: 4

}

ConnectWallet.propTypes = {
  variant: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

};

export default ConnectWallet;