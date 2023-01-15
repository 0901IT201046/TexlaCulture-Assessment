import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

function MyTask(){
    return(
        <NativeBaseProvider>
            <Box backgroundColor="white" w="95%" px={3} py={3} 
            borderRadius={10} mt={10} justifyContent="center" alignSelf="center" shadow="3">
              <Text fontSize={16} fontWeight="bold">My Task</Text>
              
              <VStack>
                <Box backgroundColor="white" borderWidth={1} borderColor="gray.200" w="100%" px={5} py={5} 
                borderRadius={20} mt={5} ml={0}>
                <HStack>
                    <Text fontSize={17} mt={2}>Attendance</Text>
                    <Text fontSize={17} color="gray.400" ml="1/3" mt="2">17</Text>
                    <Text fontSize={17} color="green.500" textDecorationLine="underline" ml="8" mt="2">View All</Text>
                
                </HStack> 
               </Box>
            </VStack>


            <VStack>
                <Box backgroundColor="white" borderWidth={1} borderColor="green.200" w="100%" px={5} py={5} 
                borderRadius={20} mt={5} ml={0}>
                <HStack>
                    <Text fontSize={17} mt={2}>Leave</Text>
                    <Text fontSize={17} color="gray.400" ml="1/2" mt="2">8</Text>
                    <Text fontSize={17} color="green.500" textDecorationLine="underline" ml="8" mt="2">View All</Text>
                
                </HStack> 
               </Box>
            </VStack>

            <VStack>
                <Box backgroundColor="white" borderWidth={1} borderColor="red.200" w="100%" px={5} py={5} 
                borderRadius={20} mt={5} ml={0}>
                <HStack>
                    <Text fontSize={17} mt={2}>Job Offers</Text>
                    <Text fontSize={17} color="gray.400" ml="1/3" mt="2">11</Text>
                    <Text fontSize={17} color="green.500" textDecorationLine="underline" ml="8" mt="2">View All</Text>
                
                </HStack> 
               </Box>
            </VStack>

            <VStack>
                <Box backgroundColor="white" borderWidth={1} borderColor="orange.200" w="100%" px={5} py={5} 
                borderRadius={20} mt={5}>
                <HStack>
                    <Text fontSize={17} mt={2}>Interview Schedule</Text>
                    <Text fontSize={17} color="gray.400" ml="10" mt="2">17</Text>
                    <Text fontSize={17} color="green.500" textDecorationLine="underline" ml="8" mt="2">View All</Text>
                
                </HStack> 
               </Box>
            </VStack>


            </Box>
            
        </NativeBaseProvider>
    )
}

export default MyTask;
