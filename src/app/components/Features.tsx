"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  return (
    <Box bg="#f9fafb">
      <Box
        mx="auto"
        maxW="1440px"
        px="20px"
        className="py-[60px] md:py-[100px]"
      >
        <Text mb="48px" fontSize="48px" fontWeight="700" textAlign="center">
          Why Choose LuggageShare?
        </Text>
        {/* Dots will appear here, outside the slider */}
        <Box mx="auto" maxW="1200px">
          <Slider {...settings}>
            <Box
              mx="auto"
              p="24px"
              maxW="446px"
              textAlign="center"
              border="1px solid #e4e4e7"
              className="shadow-lg rounded-lg"
            >
              <svg
                className="lucide lucide-dollar-sign w-12 h-12 mx-auto mb-4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-id="4"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>

              <Text fontSize="24px" fontWeight="600" mb="48px">
                Earn While You Travel
              </Text>
              <Text fontSize="16px" color="#4b5563">
                Turn your unused luggage space into extra cash. Earn money by
                transporting items during your travels.
              </Text>
            </Box>

            <Box
              mx="auto"
              p="24px"
              maxW="446px"
              textAlign="center"
              border="1px solid #e4e4e7"
              className="shadow-lg rounded-lg"
            >
              <svg
                className="lucide lucide-lock w-12 h-12 mx-auto mb-4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-id="1"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>

              <Text fontSize="24px" fontWeight="600" mb="48px">
                Safe and Secure
              </Text>
              <Text fontSize="16px" color="#4b5563">
                Our advanced verification process and insurance coverage ensure
                your items are in safe hands throughout the journey.
              </Text>
            </Box>

            <Box
              mx="auto"
              p="24px"
              maxW="446px"
              textAlign="center"
              border="1px solid #e4e4e7"
              className="shadow-lg rounded-lg"
            >
              <svg
                className="lucide lucide-globe w-12 h-12 mb-4 mx-auto text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-id="3"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20z"></path>
                <path d="M2 12h20"></path>
              </svg>

              <Text fontSize="24px" fontWeight="600" mb="48px">
                Lightning Fast
              </Text>
              <Text fontSize="16px" color="#4b5563">
                Leverage existing travel routes for quicker delivery times
                compared to traditional shipping methods.
              </Text>
            </Box>

            <Box
              mx="auto"
              p="24px"
              maxW="446px"
              textAlign="center"
              border="1px solid #e4e4e7"
              className="shadow-lg rounded-lg"
            >
              <svg
                className="lucide lucide-zap w-12 h-12 mb-4 mx-auto text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>

              <Text fontSize="24px" fontWeight="600" mb="48px">
                Global Network
              </Text>
              <Text fontSize="16px" color="#4b5563">
                Access a vast network of travelers going to various
                destinations, increasing the chances of finding a match for your
                shipping needs.
              </Text>
            </Box>
          </Slider>
        </Box>

        {/* Dots outside the slider */}
        <Box mt="20px" display="flex" justifyContent="center">
          <ul style={{ display: "flex", gap: "8px" }}>
            {Array.from({ length: 4 }, (_, i) => (
              <Box
                key={i}
                width="12px"
                height="12px"
                bg={i === activeSlide ? "#373737" : "#d1d5db"}
                borderRadius="50%"
                cursor="pointer"
              ></Box>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
