import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/footer";
import WaitList from "./components/Waitlist";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";

const page = () => {
  return (
    <Box>
      <Features />
      <HowItWorks />
      <WaitList />
      <Footer />
    </Box>
  );
};

export default page;
