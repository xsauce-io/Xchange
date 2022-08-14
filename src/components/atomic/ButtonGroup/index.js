import { chakra } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";


/*
--------  ButtonGroup Component -----
* @Description : 
* Creates a group of buttons that 
* where only one can be clicked (selected) at once.
*/

const ButtonGroup = ({ buttons, onClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  //set onClick per button Id
  const handleClick = (event, id) => {
    setClickedId(id);
    onClick(event);
  };

  //use effect sets 1st button to clicked
  useEffect(() => {
    setClickedId(0);
  }, []);

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      {buttons.map((buttonObject, i) => (
        <chakra.button
          height={"100%"}
          borderRadius={"xl"}
          flex={1}
          key={i}
          name={buttonObject.name}
          value={buttonObject.value}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "active" : "inactive"}
        >
          {buttonObject.name}
        </chakra.button>
      ))}
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  onClick: PropTypes.func,
};


export default ButtonGroup;
