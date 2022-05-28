import { Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export const CallOptionCell = () => {

    return (

        <TableContainer color={"colors.white"} border="0.5px solid"
            borderColor="colors.gray.700"
            borderRadius="xl" padding={12}  >
            <Table size='md' variant={"unstyled"}>
                <Thead>
                    <Text fontSize={"xl"} paddingBottom={5}>Call-Options</Text>
                    <Tr borderTop={"0.5px solid"} borderBottom={"0.5px solid"} borderColor={"colors.gray.700"}>
                        <Th color={"colors.gray.500"} padding={5} textAlign="center">Expiration Date</Th>
                        <Th color={"colors.gray.500"} padding={5} textAlign="center">Strike Price</Th>
                        <Th color={"colors.gray.500"} padding={5} textAlign="center">Spread</Th>
                        <Th color={"colors.gray.500"} padding={5} textAlign="center">Premium</Th>
                        <Th color={"colors.gray.500"} padding={5} textAlign="center">Select</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    <Tr borderTop="0.5px solid" borderBottom={"0.5px solid"}
                        borderColor="colors.gray.700" >
                        <Td textAlign="center">21/12/2001</Td>
                        <Td textAlign="center">$404</Td>
                        <Td textAlign="center" >-25.4</Td>
                        <Td textAlign="center">1%</Td>
                        <Td textAlign="center"><Button variant={"dimmy"} size={"sm"} width={"100%"}> Select</Button></Td>
                    </Tr>
                    <Tr borderTop="0.5px solid" borderBottom={"0.5px solid"}
                        borderColor="colors.gray.700">
                        <Td textAlign="center">21/12/2001</Td>
                        <Td textAlign="center">$404</Td>
                        <Td textAlign="center" >-25.4</Td>
                        <Td textAlign="center">1%</Td>
                        <Td textAlign="center"><Button variant={"dimmy"} size={"sm"} width={"100%"}> Select</Button></Td>
                    </Tr>
                    <Tr borderTop="0.5px solid" borderBottom={"0.5px solid"}
                        borderColor="colors.gray.700">
                        <Td textAlign="center">21/12/2001</Td>
                        <Td textAlign="center">$404</Td>
                        <Td textAlign="center" >-25.4</Td>
                        <Td textAlign="center">1%</Td>
                        <Td textAlign="center"><Button variant={"dimmy"} size={"sm"} width={"100%"}> Select</Button></Td>
                    </Tr>

                </Tbody>

            </Table>
        </TableContainer>

    );
};
