import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

function SearchBar(){
    return (
        <HStack mt={10}>
        <Input placeholder="Search" variant="filled" width="80%" borderRadius="10" fontSize={15} py="2" px="2" ml={5} backgroundColor="#fff" InputLeftElement={<Icon ml="2" size="5" color="gray.500" as={<Ionicons name="ios-search" />} />} />
        <Icon size="10" color="green.600" ml={2} as={<MaterialCommunityIcons name="chat"/>}/>
        </HStack>
    )
}

export default SearchBar;
