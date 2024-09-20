"use client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
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
          backdropFilter: "blur(14px)",
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
        <div className="sm:hidden flex gap-[32px] items-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu h-6 w-6 cursor-pointer"
            data-id="17"
            onClick={() => setShowMenu(!showMenu)}
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          {showMenu && (
            <div className="sm:hidden absolute w-[110px] top-[30px] border-[#282a30] border-[1px] right-0 flex flex-col gap-[22px] items-start bg-white p-2 rounded-lg shadow-xl">
              <Link
                onClick={() => setShowMenu(!showMenu)}
                href="#"
                fontSize="14px"
                fontWeight="500"
                cursor="pointer"
              >
                Features
              </Link>
              <Link
                onClick={() => setShowMenu(!showMenu)}
                href="#"
                fontSize="14px"
                fontWeight="500"
                cursor="pointer"
              >
                How It Works
              </Link>
              <Link
                onClick={() => setShowMenu(!showMenu)}
                href="#"
                fontSize="14px"
                fontWeight="500"
                cursor="pointer"
              >
                Join Waitlist
              </Link>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="border-[1px] border-[#e4e4e7] text-[14px] font-[500] items-center justify-center whitespace-nowrap rounded-md h-10 px-4 py-2  md:hidden inline-flex"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
        <div className="hidden sm:flex gap-[32px] items-center">
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            Features
          </Link>
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            How It Works
          </Link>
          <Link href="#" fontSize="14px" fontWeight="500" cursor="pointer">
            Join Waitlist
          </Link>
        </div>
        <button className="border-[1px] border-[#e4e4e7] text-[14px] font-[500] items-center justify-center whitespace-nowrap rounded-md h-10 px-4 py-2 hidden md:inline-flex">
          Sign In
        </button>
      </Flex>
    </Box>
  );
};

export default Header;
