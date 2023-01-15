import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import photo5 from "../assets/images/5.png";
import photo6 from "../assets/images/6.png";
import photo7 from "../assets/images/7.png";
import photo8 from "../assets/images/8.png";
import photo9 from "../assets/images/9.png";

function MyTeam(){
    return (
        <NativeBaseProvider>
            <Box backgroundColor="white" w="95%" px={5} py={5} 
            borderRadius={10} mt={10} justifyContent="center" alignSelf="center" shadow="3">
              <HStack w="100%" flexDirection="row">
               <Text fontWeight="bold" fontSize={18}>My Team</Text>
               <Text ml="3/5" color="green.500" fontSize={16} textDecorationLine={"underline"}>View All</Text>
              </HStack>
              <HStack mt={5}>
                <Box backgroundColor="green.100" w="20%" px={2} py={2} 
                borderRadius={10}>
                    <Text fontSize={25} justifyContent="center" alignSelf="center" color="green.700" fontWeight={600}>B20</Text>
                </Box>

                <Box backgroundColor="red.100" w="20%" px={2} py={2} 
                borderRadius={10} ml={4}>
                    <Text fontSize={25} justifyContent="center" alignSelf="center" color="red.700" fontWeight={600}>A20</Text>
                </Box>

                <Box backgroundColor="pink.100" w="20%" px={2} py={2} 
                borderRadius={10} ml={4}>
                    <Text fontSize={25} justifyContent="center" alignSelf="center" color="pink.700" fontWeight={600}>L20</Text>
                </Box>

                <Box backgroundColor="blue.100" w="25%" px={2} py={2} 
                borderRadius={10} ml={4}>
                    <Text fontSize={25} justifyContent="center" alignSelf="center" color="blue.700" fontWeight={600}>All20</Text>
                </Box>
              </HStack>

              <VStack>
                <HStack mt={5} ml={-3}>
                    <Image 
                        source={photo5}
                        alt="photo5"
                        borderRadius={50}
                        ml={3}
                        size={16}
                    />
                    <Text ml={5} mt={3} fontSize={18}>Rashmi</Text>
                    <Text ml={5} mt={3} fontSize={18} color="gray.400">Trainee</Text>
                    <Icon ml={3} mt={4} color="green.600" size="lg" as={<MaterialIcons name="fiber-manual-record"/>} />
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Present</Text>
                </HStack>

                <HStack mt={5} ml={-3}>
                    <Image 
                        source={photo6}
                        alt="photo6"
                        borderRadius={50}
                        ml={3}
                        size={16}
                    />
                    <Text ml={4} mt={3} fontSize={18}>Manisha</Text>
                    <Text ml={5} mt={3} fontSize={18} color="gray.400">HR</Text>
                    <Icon ml={10} mt={4} color="green.600" size="lg" as={<MaterialIcons name="fiber-manual-record"/>} />
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Present</Text>
                </HStack>

                <HStack mt={5} ml={-3}>
                    <Image 
                        source={photo7}
                        alt="photo7"
                        borderRadius={50}
                        ml={3}
                        size={16}
                    />
                    <Text ml={2} mt={3} fontSize={18}>Abhishek</Text>
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Developer</Text>
                    <Icon ml={1} mt={4} color="green.600" size="lg" as={<MaterialIcons name="fiber-manual-record"/>} />
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Present</Text>
                </HStack>

                <HStack mt={5} ml={-3}>
                    <Image 
                        source={photo8}
                        alt="photo8"
                        borderRadius={50}
                        ml={3}
                        size={16}
                    />
                    <Text ml={5} mt={3} fontSize={18}>Aditya</Text>
                    <Text ml={5} mt={3} fontSize={18} color="gray.400">Trainee</Text>
                    <Icon ml={5} mt={4} color="green.600" size="lg" as={<MaterialIcons name="fiber-manual-record"/>} />
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Absent</Text>
                </HStack>

                <HStack mt={5} ml={-3}>
                    <Image 
                        source={photo9}
                        alt="photo9"
                        borderRadius={50}
                        ml={3}
                        size={16}
                    />
                    <Text ml={5} mt={3} fontSize={18}>Neeraj</Text>
                    <Text ml={6} mt={3} fontSize={18} color="gray.400">HR</Text>
                    <Icon ml={12} mt={4} color="green.600" size="lg" as={<MaterialIcons name="fiber-manual-record"/>} />
                    <Text ml={1} mt={3} fontSize={18} color="gray.400">Absent</Text>
                </HStack>
              </VStack>
            </Box>
        </NativeBaseProvider>
    )
}

export default MyTeam;
