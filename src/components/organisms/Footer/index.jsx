import {
  ArrowUpIcon,
  EmailIcon,
  PhoneIcon,
  QuestionIcon,
  SearchIcon
} from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Container, Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer, Stack, Text
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";


/*
--------  Footer Component -----
* @Description : 
* TODO: break down component into 4 smaller pieces.
*/

const Footer = () => {

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/
  return (
    <React.Fragment>
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
            <Flex bg="colors.primary.900" flexDirection={{ sm: "column", md: "row" }} >
              {/* Message */}
              <Container flex={1} paddingInlineEnd={0} paddingInlineStart={0}>
                <Flex flexDirection="column">
                  <Text
                    alignSelf="left"
                    alignContent="left"
                    fontSize={{ sm: "4xl", md: "5xl" }}
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
              <Flex flex={1} justifyContent={{ md: "right" }} marginTop={{ sm: 6, }}>
                <InputGroup
                  width="75%"
                  alignSelf="center"
                  border="0px"
                  maxW={400}
                  minW={300}
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
              color="colors.gray.500"
              fontSize="sm"

            >
              <Stack direction={{ sm: 'column', md: 'row' }} alignContent={{ sm: 'stretch' }}>
                <Link
                  to={{
                    pathname: "//docs.xsauce.io/getting-started/introduction",
                  }}
                  target="_blank"

                >
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Whitepaper</Text>
                </Link>
                <Link to="/xvault">
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Xvault</Text>
                </Link>
                <Link to="/xhibit">
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Xhibit</Text>
                </Link>
                <Link to="/xchange">
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Xchange</Text>
                </Link>
                <Link
                  to={{
                    pathname: "//docs.xsauce.io/getting-started/introduction",
                  }}
                  target="_blank"
                >
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Docs</Text>
                </Link>
                <Link
                  to={{
                    pathname: "//docs.xsauce.io/getting-started/introduction",
                  }}
                  target="_blank"
                >
                  <Text padding={2} fontSize={{ sm: 'xs', md: 'sm' }}>Resources</Text>
                </Link>

                {/* <Box alignSelf={"center"} justifySelf={"self-end"}>
                  <Text color="colors.gray.500" fontSize="xs">
                    © 2022 Xsauce platform
                  </Text>
                </Box> */}

              </Stack>
              <Spacer />
              <Box marginRight={0} alignSelf={{ sm: 'flex-end', md: 'center' }}>
                <Text color="colors.gray.500" fontSize="xs">
                  © 2022 Xsauce platform
                </Text>
              </Box>
            </Flex>

          </Flex>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;