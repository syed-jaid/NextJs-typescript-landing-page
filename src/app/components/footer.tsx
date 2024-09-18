import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box w="100%" bg="#f3f4f6">
      <Box px="20px" py="26px" mx="auto" w="100%" maxW="1440px">
        <Flex
          gap="40px"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap="16px">
            <svg
              className="lucide lucide-luggage h-6 w-6 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-id="78"
            >
              <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"></path>
              <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
              <path d="M10 20h4"></path>
              <circle cx="16" cy="20" r="2"></circle>
              <circle cx="8" cy="20" r="2"></circle>
            </svg>
            <Text fontSize="20px" fontWeight="700">
              LuggageShare
            </Text>
          </Flex>
          <Flex gap="25px" alignItems="center" flexFlow="wrap">
            <Link
              fontSize="15px"
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              fontSize="15px"
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              fontSize="15px"
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              href="#"
            >
              Contact Us
            </Link>
          </Flex>
        </Flex>
        <Text mt="16px" color="#6B7280" fontSize="15px" textAlign="center">
          © 2023 LuggageShare. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
