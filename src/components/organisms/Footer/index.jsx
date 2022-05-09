import { ArrowUpIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../../utils/theme/theme";

export const Footer = () => {
  return (
    <Box w="100%">
      <Container maxWidth="85%" paddingInlineEnd={0} paddingInlineStart={0}>
        <Flex flexDirection="column">
          <Box paddingTop={5} paddingBottom={5}>
            <AspectRatio w="20px" ratio={1 / 1}>
              <Box bg={theme.colors.green} />
            </AspectRatio>
          </Box>
          <Flex bg={theme.colors.dark} flexDirection="row">
            <Box flex={1}>
              <Container paddingInlineEnd={0} paddingInlineStart={0}>
                <Flex flexDirection="column">
                  <Text
                    alignSelf="left"
                    alignContent="left"
                    fontSize={36}
                    color={theme.colors.white}
                  >
                    Suite of tools that empower the evolution of cultural
                    assets.
                  </Text>
                  <Spacer w={2} />
                  <Box
                    width={240}
                    height={1}
                    bg={theme.colors.green}
                    alignSelf="center"
                  />
                </Flex>
              </Container>
            </Box>
            <Flex flex={1} justifyContent="right">
              <InputGroup width="75%" alignSelf="center" border="0px">
                <Input
                  type="email"
                  placeholder="Email@hotmail.com"
                  fontSize={12}
                  width="50%"
                  bg={theme.colors.white}
                  border="0px"
                />
                <InputRightAddon
                  width="50%"
                  bg={theme.colors.green}
                  color={theme.colors.dark}
                  border="0px"
                >
                  <Button fontSize={12} bg={theme.colors.green} border="0px">
                    Send the whitepaper
                  </Button>
                  <ArrowUpIcon w={3} h={3}></ArrowUpIcon>
                </InputRightAddon>
              </InputGroup>
            </Flex>
          </Flex>
          <HStack paddingTop={5} paddingBottom={5}>
            <IconButton
              bg={theme.colors.dark}
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color={theme.colors.grey} />}
            />
            <IconButton
              bg={theme.colors.dark}
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color={theme.colors.grey} />}
            />
            <IconButton
              bg={theme.colors.dark}
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color={theme.colors.grey} />}
            />
            <IconButton
              bg={theme.colors.dark}
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color={theme.colors.grey} />}
            />
          </HStack>

          <Flex
            flexDirection="row"
            paddingInlineStart={0}
            paddingInlineEnd={0}
            alignItems="center"
            paddingTop={2}
            paddingBottom={2}
            w="100%"
            borderTop={`1px solid ${theme.colors.grey}`}
          >
            <Box>
              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Whitepaper
              </Button>
              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Xvault
              </Button>

              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Xhibit
              </Button>

              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Xchange
              </Button>

              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Docs
              </Button>
              <Button bg={theme.colors.dark} style={style.navButtonStyle}>
                Resources
              </Button>
            </Box>
            <Spacer />
            <Box>
              <Text style={style.navTextStyle}>© 2022 Xsauce platform</Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const style = {
  navButtonStyle: {
    color: theme.colors.grey,
    borderRadius: 0,
    size: "xsm",
    fontSize: 12,
    fontWeight: 350,
    paddingLeft: 2,
    paddingRight: 2,
  },

  navTextStyle: {
    color: theme.colors.grey,
    size: "xsm",
    fontSize: 12,
    fontWeight: 350,
  },
};
