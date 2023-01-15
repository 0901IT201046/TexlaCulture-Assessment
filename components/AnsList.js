import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

const AncList = () => {
  return (
    <NativeBaseProvider>
     <ScrollView horizontal={true}>
      <HStack mt={10}>
        <Box backgroundColor="orange.200" w="45%" px={2} py={2} 
            borderRadius={20} ml={2}>
          <HStack>
            <Box backgroundColor="yellow.400" w="20%" px={3} py={3} borderRadius={15} >
            <Icon size="12" ml={-1} color="red.400" 
                as={<MaterialIcons name="schedule"/>}/>
            </Box> 
            <VStack>
              <Text mt={3} ml={2} fontSize={15}>Employees Are Expected To Clock...</Text>
              <Text mt={0.8} ml={2} color="gray.500" fontWeight={500}>1 hour ago</Text>
            </VStack>
          </HStack>
        </Box>

        <Box backgroundColor="pink.200" px={2} py={2}  
            borderRadius={20} ml={2}>
          <HStack>
            <Box backgroundColor="pink.100" ml={2} w="17%" px={3} py={3} borderRadius={15}>
            <Icon size="12" color="red.400" ml={-1}
                as={<MaterialIcons name="park"/>}/>
            </Box> 
            <VStack>
              <Text mt={3} ml={2} fontSize={15}>Employees Are Expected To Clock...</Text>
              <Text mt={0.8} ml={2} color="gray.500" fontWeight={500}>1 hour ago</Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
     </ScrollView>
    </NativeBaseProvider>
  )
}

export default AncList;
