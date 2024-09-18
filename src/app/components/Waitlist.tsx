import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const WaitList = () => {
  return (
    <Box bg="#18181b" className="py-[60px] md:py-[100px]" px="20px">
      <Box>
        <Text color="white" fontSize="48px" textAlign="center" fontWeight="700">
          Join Our Waitlist
        </Text>
        <Text
          mx="auto"
          maxW="600px"
          color="#a2a2a3"
          textAlign="center"
          fontSize="20px"
          fontWeight="500"
        >
          Be among the first to experience the future of peer-to-peer shipping
          and start earning. Sign up for our waitlist and get early access when
          we launch
        </Text>
        <Flex
          gap="10px"
          mt="20px"
          mx="auto"
          w="100%"
          maxW="384px"
          flexDirection="column"
        >
          <Input
            py="8px"
            px="8px"
            bg="#303032"
            fontSize="14px"
            fontWeight="500"
            border="1px solid #59595b"
            borderRadius="8px"
            placeholder="Enter your name"
            required
          />
          <Input
            py="8px"
            px="8px"
            bg="#303032"
            fontSize="14px"
            fontWeight="500"
            border="1px solid #59595b"
            borderRadius="8px"
            placeholder="Enter your email"
            required
          />

          <Button
            type="submit"
            py="8px"
            bg="white"
            color="#18181b"
            fontSize="14px"
            fontWeight="600"
            borderRadius="8px"
          >
            Join Waitlist
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default WaitList;
