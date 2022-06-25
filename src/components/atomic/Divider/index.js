import { chakra } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";


/*
--------  Spacer Component -----
* @Description : 
* Component to set spacing
*/


const Divider = ({ spacing }) => {


  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <chakra.hr
        marginTop={spacing}
        marginBottom={spacing}
        borderTop="1px solid"
        borderColor="colors.gray.700"
      />
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

Divider.propTypes = {
  spacing: PropTypes.number,
};


export default Divider;
