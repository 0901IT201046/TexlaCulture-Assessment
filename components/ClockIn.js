import React from "react";
import { NativeBaseProvider, Text, Box, HStack, Icon, VStack, ScrollView } from "native-base";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

function ClockIn(){
    return (
        <NativeBaseProvider>
            <Box backgroundColor="blue.100" w="95%" px={3} py={3} 
            borderRadius={20} mt={5} justifyContent="center" alignSelf="center">
          <HStack>
            <Icon size="12" mt={2} color="blue.500"   
                as={<MaterialIcons name='watch-later'/>}/> 
            <VStack>
              <Text ml={3} fontSize={15}>03/01/23</Text>
              <Text ml={3} fontSize={15}>Clock In-hh:mm AM</Text>
              <Text ml={3} fontSize={15}>Clock Out-hh:mm PM</Text>
            </VStack>

            <Box backgroundColor="blue.500" w="25%" px={2} py={2} 
            borderRadius={10} ml={5} justifyContent="center" alignSelf="center">
                <Text color="white" justifyContent="center" alignSelf="center" fontSize={17}>Clock In</Text>
            </Box>

            <Icon size="12" mt={2} color="gray.500"   
                as={<MaterialIcons name='chevron-right'/>}/>
          </HStack>
        </Box>
        </NativeBaseProvider>
    )
}

export default ClockIn;
