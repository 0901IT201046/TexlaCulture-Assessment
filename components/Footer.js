import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, Image } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import photo4 from "../assets/images/4.png";

function Footer() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="yellow.200" width="100%"  alignSelf="center" position="absolute" bottom="0">
        
        <HStack bg="gray.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" color="green.500" size="lg" as={<MaterialIcons name="home" />} />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
                    <Image 
                        source={photo4}
                        alt="photo4"
                        borderRadius={50}
                        ml={3}
                        size={8}
                    />
              <Text color="white" fontSize="12">
                My Space
              </Text>
            </Center>
          </Pressable>

          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
            <Icon mb="1" color="gray.100" size="lg" as={<MaterialIcons name="notifications"/>} />
              <Text color="white" fontSize="12">
                Notifications
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}

export default Footer;
