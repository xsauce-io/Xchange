import { LinkIcon } from "@chakra-ui/icons";
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
            <Button colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                bg={"colors.gray.500"}

            >
                <DrawerOverlay />
                <DrawerContent bg={"lightgrey"}
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
                            <CustomLink to="/xvault" selectedColor={"#ACFF00"} unselectedColor={"black"}>
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    <Text >Xvault</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />
                            <CustomLink to="/xhibit" selectedColor={"#ACFF00"} unselectedColor={"black"} >
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    <Text >Xhibit</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />
                            <CustomLink to="/xchange/markets/all" customResolved={"/xchange"} selectedColor={"#ACFF00"} unselectedColor={"black"}  >
                                <Box display="flex" justifyContent={"center"} alignItems="center">
                                    {/* <ArrowBackIcon /> */}
                                    <Text>Xchange</Text>
                                </Box>
                            </CustomLink>
                            <Divider borderColor='gray.200' />

                            {/* Wallet & Chain Buttons */}

                            <Select
                                placeholder="Polygon"
                                width="130px"
                                borderRadius="2xl"
                                variant="flashy"
                                height="35px"
                                fontSize={"xs"}
                                color="black"
                                textAlign={"center"}
                                icon={<LinkIcon />}
                                iconSize={"sm"}
                                iconColor="purple"
                                border="1px solid #30403F"
                            >
                                <option value="option2">Polygon</option>
                            </Select>
                            <Divider borderColor='gray.200' />


                            <ConnectWallet />
                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </React.Fragment>


    );
};


export default HeaderDrawer;