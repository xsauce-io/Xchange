import { chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ButtonGroup = ({ buttons, onClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    onClick(event);
  };

  //use effect sets 1st button to clicked
  useEffect(() => {
    setClickedId(0);
  }, []);

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <chakra.button
          height={"100%"}
          borderRadius={"xl"}
          flex={1}
          key={i}
          name={buttonLabel}
          value={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "active" : "inactive"}
        >
          {buttonLabel}
        </chakra.button>
      ))}
    </>
  );
};

export default ButtonGroup;
