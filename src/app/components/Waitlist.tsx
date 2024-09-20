"use client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const WaitList = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    console.log(formData);
    e.preventDefault();
    try {
      console;
      const response = await axios.post(
        "https://sheet.best/api/sheets/de900275-5b5e-457f-9bea-42293b26bb43",
        { Name: formData.name, Email: formData.email }
      );
      console.log(response);
      alert("Successfully added to Waitlist"); // Displays success message
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit the form"); // Error handling
    }
  };
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
        <form onSubmit={handleSubmit}>
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
              color="white"
              border="1px solid #59595b"
              borderRadius="8px"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
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
              color="white"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
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
        </form>
      </Box>
    </Box>
  );
};

export default WaitList;
