import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

function QuickLink(){
    return (
        <NativeBaseProvider>
            <Box backgroundColor="white" w="95%" px={5} py={5} 
            borderRadius={10} mt={10} justifyContent="center" alignSelf="center" shadow="3">
                <Text fontSize={17} fontWeight="bold">Quick Links</Text>
                
                <HStack>
                    <Box backgroundColor="blue.200" w="30%" px={3} py={3} 
                    borderRadius={10} mt={10} justifyContent="center" alignSelf="center">
                        <HStack>
                            <Text fontSize={16}>Holiday Calender</Text>
                            <Icon color="gray.500" mt={-3} size="lg" as={<MaterialIcons name="north-east"/>} />
                        </HStack>
                    </Box>

                    <Box backgroundColor="blue.200" w="30%" ml={5} px={3} py={3} 
                    borderRadius={10} mt={10} justifyContent="center" alignSelf="center">
                        <HStack>
                            <Text fontSize={16} ml={3}>Leave Policy</Text>
                            <Icon color="gray.500" mt={-3} size="lg" as={<MaterialIcons name="north-east"/>} />
                        </HStack>
                    </Box>

                    <Box backgroundColor="blue.200" w="30%" ml={5} px={3} py={3} 
                    borderRadius={10} mt={10} justifyContent="center" alignSelf="center">
                        <HStack>
                            <Text fontSize={16} ml={2}>Payroll Manual</Text>
                            <Icon color="gray.500" mt={-3} size="lg" as={<MaterialIcons name="north-east"/>} />
                        </HStack>
                    </Box>
                </HStack>
            </Box>

        </NativeBaseProvider>
    )
}

export default QuickLink;
