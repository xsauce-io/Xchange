import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useAuthContext } from "../../../context";

/*
Props:
    height: number
    width: number
*/

export const OracleCell = ({ width, height, product }) => {
  const [isYes, setIsYes] = useState(true);
  const [canRedeem, setCanRedeem] = useState(false);
  const { contract } = useAuthContext();

  const setCanRedeemYes = () => {
    setCanRedeem(true);
  };

  const printButtonLabel = (event) => {
    console.log(event.target.value);
    if (event.target.value === "YES") {
      setIsYes(true);
    } else if (event.target.value === "NO") {
      setIsYes(false);
    }
  };

  const openContract = useCallback(async () => {
    await contract.resume();
  }, []);

  const closeContract = useCallback(async () => {
    await contract.close();
  }, []);

  const pauseContract = useCallback(async () => {
    await contract.pause();
  }, []);

  const pickWinner = useCallback(async (isTrue) => {
    await contract.PickWinner(isTrue);
  }, []);

  return (
    <VStack
      marginTop={0}
      marginBottom="5%"
      width={width}
      height={height}
      minHeight="fit-content"
      bg="colors.primary.900"
      alignItems="left"
      padding={12}
      border="1px solid"
      borderColor="colors.gray.700"
      borderRadius={"xl"}
    >
      <Text
        flex={2}
        color="colors.white"
        lineHeight="normal"
        fontSize={"xl"}
        height={53}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Control Market
      </Text>

      <HStack>
        <Button
          onClick={openContract}
          flex={2}
          variant={"flashy"}
          size={"md"}
          height={53}
          fontWeight={"bold"}
        >
          Open
        </Button>
        <Button
          onClick={pauseContract}
          flex={2}
          variant={"flashy"}
          size={"md"}
          height={53}
          fontWeight={"bold"}
        >
          Pause
        </Button>
        <Button
          onClick={closeContract}
          flex={2}
          variant="dimmy"
          size={"md"}
          height={53}
          fontWeight={"bold"}
          width={"50%"}
        >
          Close
        </Button>
      </HStack>

      <Text
        flex={2}
        color="colors.white"
        lineHeight="normal"
        fontSize={"xl"}
        height={53}
        fontWeight={"bold"}
        textAlign={"center"}
        paddingTop={4}
      >
        Pick Winner
      </Text>

      <HStack>
        <Button
          onClick={() => pickWinner(true)}
          flex={2}
          variant={"flashy"}
          size={"md"}
          height={53}
          fontWeight={"bold"}
        >
          Yes
        </Button>
        <Button
          onClick={() => pickWinner(false)}
          flex={2}
          variant={"flashy"}
          size={"md"}
          height={53}
          fontWeight={"bold"}
          width={"50%"}
          alignSelf={"center"}
        >
          No
        </Button>
      </HStack>
    </VStack>
  );
};
