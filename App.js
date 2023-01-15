import React from "react";
import Footer from "./components/Footer";
import AncList from "./components/AncList";
import { NativeBaseProvider,ScrollView, Text, Box, Heading, HStack, VStack } from "native-base";
import SearchBar from "./components/Search";
import WlcList from "./components/WlcList";
import ClockIn from "./components/ClockIn";
import MyTeam from "./components/MyTeam";
import QuickLink from "./components/QuickLink";
import Celebration from "./components/Celebration";
import MyTask from "./components/MyTask";

export default function App() {
  
  return (
    <NativeBaseProvider>
      <ScrollView>
       <VStack backgroundColor="gray.300" w="100%" borderRadius={20}>
        <Box>
          <SearchBar />
          <HStack w="100%">
            <Heading mt={8} ml={4} color="gray.800">Announcements</Heading>
            <Text mt={8} ml="1/3" fontSize={16} color="green.600" textDecorationLine={"underline"}>View All</Text>
          </HStack>
          <HStack>
            <AncList />
          </HStack>
        </Box>
        <Box>
          <Text mt={10} fontSize={30} color="orange.400" fontWeight={600} ml="1/3">
            Welcome
          </Text>
          <WlcList />
        </Box>
        </VStack>  
        
        <ClockIn />
        <MyTeam />

        <QuickLink />

        <Celebration />

        <MyTask />        

        <Box backgroundColor="white" w="100%" px={60} py={60}></Box>
      </ScrollView>
      
      <Footer />
    </NativeBaseProvider>
  );
}
