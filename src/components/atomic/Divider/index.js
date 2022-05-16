import { chakra } from "@chakra-ui/react";
import React from "react";

const Divider = (props) => {
  const { spacing } = props;
  return (
    <>
      <chakra.hr
        marginTop={spacing}
        marginBottom={spacing}
        borderTop="1px solid"
        borderColor="colors.gray.700"
      />
    </>
  );
};

export default Divider;
