import { keyframes } from "@emotion/react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import mainCode from "../assets/codeSlider.png";
import profileImage from "../assets/profile-icons.png";
//
const moveUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

const animation = `${moveUp} 10s linear infinite`;

const Card = () => (
  <Box
    mt={10}
    textAlign={"center"}
    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    p={{ base: "15px", md: "25px" }}
    borderRadius={"8%"}
    animation={animation}
    backgroundColor={"white"}
    maxW={{ base: "250px", md: "310px" }}
  >
    <Box display="flex" justifyContent="center">
      <Image
        src={profileImage}
        alt="Profile Icon"
        boxSize={{ base: "50px", md: "70px" }}
      />
    </Box>
    <Text
      mt={5}
      fontWeight={"semibold"}
      fontFamily={"Roboto"}
      color={"#000000"}
      fontSize={{ base: "18px", md: "22px" }}
    >
      Meagan Fisher
    </Text>
    <Text
      fontWeight={400}
      fontSize={{ base: "10px", md: "12px" }}
      color="#A7AAB0"
      fontFamily={"Roboto"}
      mt={1}
    >
      Engineering Manager
    </Text>
    <Box mt={{ base: 10, md: 20 }}>
      <Button
        borderRadius={"25px"}
        p={"8px 16px"}
        backgroundColor={"#0284FE"}
        color={"white"}
        marginRight={4}
        rightIcon={<AddIcon />}
        h={{ base: "40px", md: "48px" }}
        fontFamily={"Roboto"}
        _hover={{ bg: "#0284FE" }}
        fontSize={{ base: "14px", md: "16px" }}
      >
        Follow
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        p={"8px 16px"}
        marginRight={4}
        rightIcon={<ChatIcon />}
        color={"#505256"}
        h={{ base: "40px", md: "48px" }}
        fontFamily={"Roboto"}
        borderRadius={"25px"}
        fontSize={{ base: "14px", md: "16px" }}
      >
        Message
      </Button>
    </Box>
  </Box>
);

export const Codesnippets = () => {
  return (
    <Box display="flex" justifyContent="center" w="100%" mt={"10rem"}>
      <Box w={{ base: "90%", md: "70%" }} position="relative">
        <Image src={mainCode} width="100%" />
        <Box
          position="absolute"
          top="0"
          right={{ base: "0", md: "0" }}
          width={{ base: "100%", md: "310px" }}
          height="100%"
          overflow="hidden"
          display={{ base: "flex", md: "block" }}
          justifyContent={{ base: "flex-end", md: "unset" }}
        >
          <Box
            position={{ base: "relative", md: "absolute" }}
            top={{ base: "unset", md: "0" }}
            right={{ base: "unset", md: "0" }}
            width={{ base: "auto", md: "100%" }}
            height={{ base: "auto", md: "100%" }}
          >
            <Card />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};



