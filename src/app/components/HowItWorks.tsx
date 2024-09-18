import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const HowItWorks = () => {
  return (
    <Box mx="auto" maxW="1440px" px="20px" className="py-[60px] md:py-[100px]">
      <Text mb="48px" fontSize="48px" fontWeight="700" textAlign="center">
        How It Works
      </Text>
      <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] pb-[60px]">
        <Box mx="auto">
          <Image
            w="50px"
            h="50px"
            bg="black"
            mx="auto"
            mb="16px"
            borderRadius="120px"
            src="https://i.ibb.co.com/S04YYgV/Screenshot-2024-09-18-021851.png"
            alt=""
          />
          <Text mb="8px" fontSize="20px" fontWeight="700" textAlign="center">
            List Your Space or Item
          </Text>
          <Text fontSize="16px" color="#4B5563" textAlign="center">
            Travelers list their available luggage space, while shippers list
            items they need to send.
          </Text>
        </Box>
        <Box mx="auto">
          <Image
            w="50px"
            h="50px"
            bg="black"
            mx="auto"
            mb="16px"
            borderRadius="120px"
            src="https://i.ibb.co.com/S04YYgV/Screenshot-2024-09-18-021851.png"
            alt=""
          />
          <Text mb="8px" fontSize="20px" fontWeight="700" textAlign="center">
            Match and Connect
          </Text>
          <Text fontSize="16px" color="#4B5563" textAlign="center">
            Our algorithm matches travelers and shippers based on routes, dates,
            and item specifications.
          </Text>
        </Box>
        <Box mx="auto">
          <Image
            w="50px"
            h="50px"
            bg="black"
            mx="auto"
            mb="16px"
            borderRadius="120px"
            src="https://i.ibb.co.com/S04YYgV/Screenshot-2024-09-18-021851.png"
            alt=""
          />
          <Text mb="8px" fontSize="20px" fontWeight="700" textAlign="center">
            Ship and Earn
          </Text>
          <Text fontSize="16px" color="#4B5563" textAlign="center">
            Travelers transport items to their destination, where shippers or
            recipients collect them. Earn money for your service!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
