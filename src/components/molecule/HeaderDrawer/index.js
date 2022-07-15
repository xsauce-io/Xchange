import { HamburgerIcon, LinkIcon } from "@chakra-ui/icons";
import {
    Box,
    Button, Divider, Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerOverlay, Select, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import React from "react";
import CustomLink from "../../atomic/CustomLink";
import ConnectWallet from "../ConnectWallet";

/* */
const HeaderDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <React.Fragment>
            <Button colorScheme='grey' onClick={onOpen} border="1px solid #30403F">
                <HamburgerIcon boxSize={5} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                bg={"colors.gray.100"}

            >
                <DrawerOverlay />
                <DrawerContent bg={"colors.primary.900"}
                >
                    <DrawerCloseButton />

                    <DrawerBody>

                        <VStack
                            spacing={4}
                            align='stretch'
                            marginTop={10}
                            alignItems="center"
                            justifyContent="center"
                            flex={1}
                            color="colors.gray.500"
                            fontSize={"xl"}

                        >
                            <CustomLink to="/xvault" selectedColor={"#ACFF00"} unselectedColor={"white"}>
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    <Text >Xvault</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />
                            <CustomLink to="/xhibit" selectedColor={"#ACFF00"} unselectedColor={"white"} >
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    <Text >Xhibit</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />
                            <CustomLink to="/xchange/markets/all" customResolved={"/xchange"} selectedColor={"#ACFF00"} unselectedColor={"white"}  >
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    {/* <ArrowBackIcon /> */}
                                    <Text>Xchange</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />

                            {/* Wallet & Chain Buttons */}

                            <Select
                                placeholder="Polygon"
                                width="145px"
                                borderRadius="3xl"
                                variant="unstyled"
                                height="45px"
                                fontSize={"lg"}
                                color="colors.white"
                                textAlign={"center"}
                                icon={<LinkIcon />}
                                iconSize={"sm"}
                                iconColor="purple"
                                bg={"colors.primary.900"}
                                border="1px solid #30403F"

                            >
                                <option value="option2">Polygon</option>
                            </Select>
                            <Divider borderColor='gray.200' />


                            <ConnectWallet
                                variant={'outline'}
                                height="45px"
                                fontSize={"lg"}
                                width="145px"
                                bg={"colors.primary.900"}
                                borderRadius={"3xl"}
                                padding={6}
                            />
                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </React.Fragment>


    );
};


export default HeaderDrawer;