import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import photo1 from "../assets/images/1.png";
import photo2 from "../assets/images/2.png";
import photo3 from "../assets/images/3.png";

function WlcList(){
    return (
        <NativeBaseProvider>
          <ScrollView horizontal={true}>
            <HStack py={10}>
                <Box backgroundColor="orange.100" ml={2} px={5} py={5} borderRadius={20} shadow="2" borderWidth={1} borderColor="yellow.500">
                    <Image 
                        source={photo1}
                        alt="photo1"
                        borderRadius={50}
                        ml={3}
                    />
                <Text mt={5} fontSize={25} ml={5} color="orange.500" >Sahil</Text>
                <Text fontSize={20} color="gray.500">UX Designer</Text>
                <Text fontSize={20} color="gray.500">Joined today</Text>
                </Box>

                <Box backgroundColor="blue.100" ml={5} px={5} py={5} borderRadius={20} shadow="2"borderWidth={1} borderColor="blue.500">
                    <Image 
                        source={photo2}
                        alt="photo2"
                        borderRadius={50}
                        ml={3}
                    />
                <Text mt={5} fontSize={25} ml={5} color="blue.600" >Megha</Text>
                <Text fontSize={20} color="gray.500">UX Designer</Text>
                <Text fontSize={20} color="gray.500">Joined today</Text>
                </Box>

                <Box backgroundColor="pink.100" ml={5} px={5} py={5} borderRadius={20} mr="2" shadow="2" borderWidth={1} borderColor="pink.500">
                    <Image 
                        source={photo3}
                        alt="photo3"
                        borderRadius={50}
                        ml={3}
                    />
                <Text mt={5} fontSize={25} ml={8} color="red.600" >Ravi</Text>
                <Text fontSize={20} color="gray.500">UX Designer</Text>
                <Text fontSize={20} color="gray.500">Joined today</Text>
                </Box>
            </HStack>
          </ScrollView>
        </NativeBaseProvider>
    )
}

export default WlcList;
