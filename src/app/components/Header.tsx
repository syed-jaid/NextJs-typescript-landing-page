import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Flex
        top="0"
        w="100%"
        p="20px"
        zIndex="99"
        bg="#ffffffce"
        position="fixed"
        alignItems="center"
        sx={{
          backdropFilter: "blur(10px)",
        }}
        justifyContent="space-between"
        borderBottom="1px solid #e5e7eb"
      >
        <Flex alignItems="center" gap="16px">
          <svg
            className="lucide lucide-luggage h-8 w-8 text-primary"
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

          <span className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">
            LuggageShare
          </span>
        </Flex>
        <Flex gap="32px" alignItems="center">
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            Features
          </Link>
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            How It Works
          </Link>
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            Join Waitlist
          </Link>
        </Flex>
        <button className="border-[1px] border-[#e4e4e7] text-[14px] font-[500] items-center justify-center whitespace-nowrap rounded-md h-10 px-4 py-2 hidden md:inline-flex">
          Sign In
        </button>
      </Flex>
    </Box>
  );
};

export default Header;
