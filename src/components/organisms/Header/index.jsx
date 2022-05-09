import { AddIcon } from "@chakra-ui/icons";
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

export const Header = () => {
  return (
    <Box
      width="100%"
      bg={theme.colors.dark}
      borderBottom="1px solid "
      borderColor={theme.colors.darkgrey}
    >
      <Container maxW="85%">
        <Flex
          flexDirection="row"
          paddingInlineStart={0}
          paddingInlineEnd={0}
          alignItems="center"
          paddingTop={3}
          paddingBottom={3}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="left"
            w="33%"
          >
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
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            w="33%"
          >
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              w="100%"
            >
              <Button bg={theme.colors.dark} fontSize={12} borderRadius={0}>
                <AddIcon w={3} h={3} color={theme.colors.grey} />
                <Spacer w={2} maxWidth={4} />
                <Text color={theme.colors.grey} fontWeight={400}>
                  Xvault
                </Text>
              </Button>

              <Button bg={theme.colors.dark} fontSize={12} borderRadius={0}>
                <AddIcon w={3} h={3} color={theme.colors.grey} />
                <Spacer w={2} maxWidth={4} />
                <Text color={theme.colors.grey} fontWeight={400}>
                  Xhibit
                </Text>
              </Button>

              <Button bg={theme.colors.dark} fontSize={12} borderRadius={0}>
                <AddIcon w={3} h={3} color={theme.colors.grey} />
                <Spacer w={2} maxWidth={4} />
                <Text color={theme.colors.grey} fontWeight={400}>
                  Xchange
                </Text>
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="right"
            w="33%"
          >
            <Button
              bg={theme.colors.dark}
              fontSize={12}
              border="1px solid"
              borderColor={theme.colors.darkGrey}
            >
              <Text color={theme.colors.white}>Polygone</Text>
            </Button>
            <Spacer maxWidth={2} />
            <Button
              bg={theme.colors.dark}
              fontSize={12}
              border="1px solid"
              borderColor={theme.colors.darkGrey}
            >
              <Text color={theme.colors.white}>Wallet</Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
