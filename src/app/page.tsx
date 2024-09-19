import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/footer";
import WaitList from "./components/Waitlist";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Header from "./components/Header";
import Banner from "./components/Banner";

const page = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Features />
      <HowItWorks />
      <WaitList />
      <Footer />
    </Box>
  );
};

export default page;
