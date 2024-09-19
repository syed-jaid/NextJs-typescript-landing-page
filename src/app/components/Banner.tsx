import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <div>
        <Text>Share Space, Connect World</Text>
        <Text>
          LuggageShare revolutionizes global shipping by connecting travelers
          with extra luggage space to people who need to transport items.
          Experience fast, safe, and convenient peer-to-peer shipping like never
          before.
        </Text>
        <Flex>
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </Flex>
        <Text>Earn money by sharing your luggage space</Text>
      </div>
    </Box>
  );
};

export default Banner;
