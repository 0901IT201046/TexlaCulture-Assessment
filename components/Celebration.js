import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import photo10 from "../assets/images/10.png";
import photo11 from "../assets/images/11.png";
import photo12 from "../assets/images/12.png";
import photo13 from "../assets/images/13.png";

function Celebration(){
    return (
        <NativeBaseProvider>
            <Box backgroundColor="white" w="95%" px={5} py={5} 
            borderRadius={10} mt={10} justifyContent="center" alignSelf="center" shadow="3">
                <Text fontSize={17} fontWeight="bold">Celebration</Text>

           <Box flexDirection="row">
           
            <Box backgroundColor="green.100" w="100%" px={3} py={3} 
            borderRadius={20} mt={10} ml={0}>
          <HStack>
            <Text fontSize={17} mt={3}>Birthday</Text>
            <Text ml="2/5" mt={3} fontSize={19} color="green.600" fontWeight="600">Shubham</Text>
            <Icon size="12" mt={2} ml={2} color="gray.400"   
                as={<MaterialIcons name='chevron-right'/>}/>
                
          </HStack>
            </Box>
            <Image 
                        source={photo10}
                        alt="photo10"
                        borderRadius={50}
                        ml="-230"
                        mt="10"
                        size={20}
            />
            </Box>





           <Box flexDirection="row" mt={-5}>
           
           <Box backgroundColor="blue.100" w="100%" px={3} py={3} 
           borderRadius={20} mt={10} ml={0}>
         <HStack>
           <VStack>
           <Text fontSize={17} mt={0}>Marriage</Text>
           <Text fontSize={17}>Anniversary</Text>
           </VStack>
           <Text ml="2/5" mt={3} fontSize={19} color="blue.600" fontWeight="600">Yash</Text>
           <Icon size="12" mt={2} ml={5} color="gray.400"   
               as={<MaterialIcons name='chevron-right'/>}/>
               
         </HStack>
           </Box>
           <Image 
                       source={photo11}
                       alt="photo11"
                       borderRadius={50}
                       ml="-220"
                       mt="10"
                       size={20}
           />
           </Box>





           <Box flexDirection="row" mt={-5}>
           
           <Box backgroundColor="cyan.100" w="100%" px={3} py={3} 
           borderRadius={20} mt={10} ml={0}>
         <HStack>
           <VStack>
           <Text fontSize={17} mt={0}>Work</Text>
           <Text fontSize={17}>Anniversary</Text>
           </VStack>
           <Text ml="2/5" mt={3} fontSize={19} color="cyan.600" fontWeight="600">Riku</Text>
           <Icon size="12" mt={2} ml={5} color="gray.400"   
               as={<MaterialIcons name='chevron-right'/>}/>
               
         </HStack>
           </Box>
           <Image 
                       source={photo12}
                       alt="photo12"
                       borderRadius={50}
                       ml="-220"
                       mt="10"
                       size={20}
           />
           </Box>
           



           <Box flexDirection="row" mt={-5}>
           
           <Box backgroundColor="orange.100" w="100%" px={3} py={3} 
           borderRadius={20} mt={10} ml={0}>
         <HStack>
           <VStack>
           <Text fontSize={17}>Kid's</Text>
           <Text fontSize={17}>Birthday</Text>
           </VStack>
           <Text ml="130" mt={3} fontSize={19} color="orange.600" fontWeight="600">Priyank</Text>
           <Icon size="12" mt={2} ml={3} color="gray.400"   
               as={<MaterialIcons name='chevron-right'/>}/>
               
         </HStack>
           </Box>
           <Image 
                       source={photo13}
                       alt="photo13"
                       borderRadius={50}
                       ml="-220"
                       mt="10"
                       size={20}
           />
           </Box>

          </Box>
        </NativeBaseProvider>
    )
}

export default Celebration;
