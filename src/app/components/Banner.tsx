import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box
      backgroundImage="url('https://media.istockphoto.com/id/1194212027/vector/a-vector-illustration-textured-black-colored-grungy-old-background-resembling-a-slate-rock.jpg?s=612x612&w=0&k=20&c=bnYb1yYXV1nQ53vtmsWTSBO-YnVScZiyKfKjoTIo9Jo=')"
      backgroundSize="cover"
      backgroundPosition="center"
      className="relative mt-[78px] pt-[70px] pb-[100px] md:pt-[100px] md:pb-[150px] px-[20px]"
    >
      <div className="">
        <Text className="md:text-[72px] sm:text-[48px] text-[40px] font-[900] max-w-[890px] mx-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fafafb] to-[#d5d9de]">
          Share Space, Connect World
        </Text>
        <Text className="text-center text-[18px] md:text-[24px] max-w-[700px] mx-auto text-[#d1d5db]">
          LuggageShare revolutionizes global shipping by connecting travelers
          with extra luggage space to people who need to transport items.
          Experience fast, safe, and convenient peer-to-peer shipping like never
          before.
        </Text>
        <Flex gap="16px" py="10px" alignItems="center" justifyContent="center">
          <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium h-11 bg-[#18181b] hover:bg-gray-600 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started
          </Button>
          <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium border h-11 bg-[#ffffff38] text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Learn More
          </Button>
        </Flex>
        <Text className="text-center text-[16px] md:text-[20px] text-[#d1d5db]">
          Earn money by sharing your luggage space
        </Text>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"
        data-id="38"
      ></div>
    </Box>
  );
};

export default Banner;
