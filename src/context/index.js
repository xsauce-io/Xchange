import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import * as React from "react";
import Xtheme from "../utils/theme/index";
import { AuthContext } from "./AuthContext";

const ApplicationContext = ({ children }) => {
  return (
    <ChakraProvider theme={Xtheme}>
      <AuthContext>{children}</AuthContext>
    </ChakraProvider>
  );
};

export * from "./AuthContext";
export default ApplicationContext;

ApplicationContext.propTypes = {
  children: PropTypes.node,
};
