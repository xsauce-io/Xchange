import {
  ArrowUpIcon,
  EmailIcon,
  PhoneIcon,
  QuestionIcon,
  SearchIcon,
} from "@chakra-ui/icons";
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
                  fontSize="xs"
                  as={Button}
                >
                  Send the whitepaper
                  <ArrowUpIcon w={3} h={3}></ArrowUpIcon>
                </InputRightAddon>
              </InputGroup>
            </Flex>
          </Flex>
          {/* Social Media Section */}
          <HStack paddingTop={5} paddingBottom={5}>
            <IconButton
              variant="solid"
              color={"colors.gray.500"}
              aria-label="Send email"
              icon={<QuestionIcon />}
            />
            <IconButton
              variant="solid"
              color={"colors.gray.500"}
              aria-label="Send email"
              icon={<SearchIcon />}
            />
            <IconButton
              variant="solid"
              color={"colors.gray.500"}
              aria-label="Send email"
              icon={<PhoneIcon />}
            />
            <IconButton
              variant="solid"
              color={"colors.gray.500"}
              aria-label="Send email"
              icon={<EmailIcon />}
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
            <HStack>
              <Button variant={"solid"}>Whitepaper</Button>
              <Button variant={"solid"}>Xvault</Button>

              <Button variant={"solid"}>Xhibit</Button>

              <Button variant={"solid"}>Xchange</Button>

              <Button
                //style={style.navButtonStyle}
                variant={"solid"}
              >
                Docs
              </Button>
              <Button variant={"solid"}>Resources</Button>
            </HStack>
            <Spacer />
            <Box>
              <Text color="colors.gray.500" fontSize="xs">
                © 2022 Xsauce platform
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
