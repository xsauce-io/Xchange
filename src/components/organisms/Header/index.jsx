import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../../utils/theme/theme";
import { ConnectWallet } from "../../molecule/ConnectWallet";

/* */
export const Header = () => {
  return (
    <Box
      width="100%"
      bg={theme.colors.dark}
      borderBottom="1px solid"
      borderColor={theme.colors.darkgrey}
    >
      <Container maxW="85%">
        <Flex
          flexDirection="row"
          paddingInlineStart={0}
          paddingInlineEnd={0}
          alignItems="center"
          paddingTop={2}
          paddingBottom={2}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="left"
            flex={1}
          >
            {/* ----- XSauce Logo ---- */}
            <Flex flexDirection="row">
              <AspectRatio w="20px" ratio={1 / 1}>
                <Box bg={theme.colors.green} />
              </AspectRatio>
              <Spacer w={2} />
              <Text color={theme.colors.white} fontSize={14} fontWeight={700}>
                Xsauce
              </Text>
            </Flex>
          </Flex>
          {/* ----- Top Nav ---- */}
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            flex={1}
          >
            <Button
              leftIcon={<ArrowBackIcon />}
              color={theme.colors.grey}
              bg={theme.colors.dark}
              borderRadius={0}
              size="xsm"
              fontSize={12}
              fontWeight={350}
              paddingLeft={2}
              paddingRight={2}
            >
              Xvault
            </Button>

            <Button
              leftIcon={<ArrowBackIcon />}
              color={theme.colors.grey}
              bg={theme.colors.dark}
              borderRadius={0}
              size="xsm"
              fontSize={12}
              fontWeight={350}
              paddingLeft={2}
              paddingRight={2}
            >
              Xhibit
            </Button>

            <Button
              leftIcon={<ArrowBackIcon />}
              color={theme.colors.grey}
              bg={theme.colors.dark}
              borderRadius={0}
              size="xsm"
              fontSize={12}
              fontWeight={350}
              paddingLeft={2}
              paddingRight={2}
            >
              Xchange
            </Button>
          </Flex>

          {/* Wallet & Chain Buttons */}
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="right"
            flex={1}
          >
            <Button
              bg={theme.colors.dark}
              fontSize={10}
              border="1px solid"
              borderColor={theme.colors.midgrey}
              height="0"
              padding={3}
            >
              <Text color={theme.colors.white}>Polygone</Text>
            </Button>
            <Spacer maxWidth={2} />
            <ConnectWallet />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
