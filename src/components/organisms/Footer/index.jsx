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

export const Footer = () => {
  return (
    <Box w="100%">
      <Container maxWidth="85%">
        <Flex
          flexDirection="column"
          borderBottom="1px solid"
          borderColor="colors."
        >
          {/* Logo */}
          <Box paddingTop={5} paddingBottom={5}>
            <AspectRatio w={6} ratio={1 / 1}>
              <Box bg="colors.secondary.500" />
            </AspectRatio>
          </Box>
          {/* Message and Subscription to whitepaper section */}
          <Flex bg="colors.primary.900" flexDirection="row">
            {/* Message */}
            <Container flex={1} paddingInlineEnd={0} paddingInlineStart={0}>
              <Flex flexDirection="column">
                <Text
                  alignSelf="left"
                  alignContent="left"
                  fontSize="5xl"
                  color="colors.white"
                >
                  Suite of tools that empower the evolution of cultural assets.
                </Text>
                <Spacer w={2} />
                <Box
                  width={240}
                  height={1}
                  bg="colors.secondary.500"
                  alignSelf="center"
                />
              </Flex>
            </Container>

            {/* Subscription to whitepaper section */}
            <Flex flex={1} justifyContent="right">
              <InputGroup
                width="75%"
                alignSelf="center"
                border="0px"
                maxW={400}
              >
                <Input
                  type="email"
                  placeholder="Email@hotmail.com"
                  fontSize="xs"
                  width="50%"
                  bg="colors.white"
                  color="colors.primary.900"
                  border="0px"
                />
                <InputRightAddon
                  width="50%"
                  bg="colors.secondary.500"
                  color="colors.primary.900"
                  border="0px"
                >
                  <Button
                    fontSize="xs"
                    bg="colors.secondary.500"
                    color="colors.primary.900"
                    border="0px"
                  >
                    Send the whitepaper
                  </Button>
                  <ArrowUpIcon w={3} h={3}></ArrowUpIcon>
                </InputRightAddon>
              </InputGroup>
            </Flex>
          </Flex>
          {/* Social Media Section */}
          <HStack paddingTop={5} paddingBottom={5}>
            <IconButton
              bg="colors.primary.900"
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color="colors.gray.500" />}
            />
            <IconButton
              bg="colors.primary.900"
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color="colors.gray.500" />}
            />
            <IconButton
              bg="colors.primary.900"
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color="colors.gray.500" />}
            />
            <IconButton
              bg="colors.primary.900"
              aria-label="Search database"
              minW={6}
              icon={<QuestionIcon color="colors.gray.500" />}
            />
          </HStack>

          {/* Resources and references Section */}
          <Flex
            flexDirection="row"
            paddingInlineStart={0}
            paddingInlineEnd={0}
            alignItems="center"
            paddingTop={2}
            paddingBottom={2}
            w="100%"
            borderTop="1px solid"
            borderColor="colors.gray.700"
          >
            <Box>
              <Button bg="colors.primary.900" style={style.navButtonStyle}>
                Whitepaper
              </Button>
              <Button bg="colors.primary.900" style={style.navButtonStyle}>
                Xvault
              </Button>

              <Button bg="colors.primary.900" style={style.navButtonStyle}>
                Xhibit
              </Button>

              <Button bg="colors.primary.900" style={style.navButtonStyle}>
                Xchange
              </Button>

              <Button bg="colors.primary.900" style={style.navButtonStyle}>
                Docs
              </Button>
              <Button bg="colors.primary.900" style={style.navButtonStyle}>
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

/* ------- Style for the footer -------- */

const style = {
  navButtonStyle: {
    color: "colors.gray.500",
    borderRadius: 0,
    size: "xs",
    fontSize: "xs",
    fontWeight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
  },

  navTextStyle: {
    color: "colors.gray.500",
    size: "xs",
    fontSize: "xs",
    fontWeight: "normal",
  },
};
