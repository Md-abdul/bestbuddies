import { Image, Box, Heading, Flex, List, Text } from "@chakra-ui/react";
import gitIcon from "../assets/git.png";
import beIcon from "../assets/be.png";
import BrowserIcon from "../assets/browser.png";
import twitterIcon from "../assets/twitter.png";
import linkdenIcon from "../assets/linkden.png";

export const Footer = () => {
  return (
    <>
      <Box
      display={{ base: "none", md: "block", lg: "block",sm:'none' }}
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
        mt={40}
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="rgba(0, 0, 0, 1)"
              mb="0.5rem"
              fontSize="19px"
              fontWeight="semibold"
              fontFamily={"Roboto"}
            >
              Docs
            </Heading>
            <List
              lineHeight="2"
              justifyContent="center"
              color={"rgba(80, 82, 86, 1)"}
              fontFamily={"Roboto"}
              fontWeight={400}
              fontSize={"14px"}
            >
              <Text color={"rgba(80, 82, 86, 1)"}>Installation</Text>
              <Text>Theme Setup</Text>
              <Text>Grid</Text>
              <Text>Atoms</Text>
              <Text>Molecules</Text>
              <Text>Functions</Text>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="rgba(0, 0, 0, 1)"
              mb="0.5rem"
              fontSize="19px"
              fontWeight="semibold"
              fontFamily={"Roboto"}
            >
              Atk jze
            </Heading>
            <List
              lineHeight="2"
              justifyContent="center"
              color={"rgba(80, 82, 86, 1)"}
              fontFamily={"Roboto"}
              fontWeight={400}
              fontSize={"14px"}
            >
              <Text>Features</Text>
              <Text>Design</Text>
              <Text>Development</Text>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="rgba(0, 0, 0, 1)"
              mb="0.5rem"
              fontSize="19px"
              fontWeight="semibold"
              fontFamily={"Roboto"}
            >
              Resources
            </Heading>
            <List
              lineHeight="2"
              justifyContent="center"
              color={"rgba(80, 82, 86, 1)"}
              fontFamily={"Roboto"}
              fontWeight={400}
              fontSize={"14px"}
            >
              <Text>Sketch File</Text>
              <Text>Github</Text>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="rgba(0, 0, 0, 1)"
              mb="0.5rem"
              fontSize="19px"
              fontWeight="semibold"
              fontFamily={"Roboto"}
            >
              About
            </Heading>
            <List
              lineHeight="2"
              justifyContent="center"
              color={"rgba(80, 82, 86, 1)"}
              fontFamily={"Roboto"}
              fontWeight={400}
              fontSize={"14px"}
            >
              <Text>Showcase</Text>
              <Text>Contribute</Text>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="rgba(0, 0, 0, 1)"
              mb="0.5rem"
              fontSize="19px"
              fontWeight="semibold"
              fontFamily={"Roboto"}
            >
              extras
            </Heading>
            <List
              lineHeight="2"
              justifyContent="center"
              color={"rgba(80, 82, 86, 1)"}
              fontFamily={"Roboto"}
              fontWeight={400}
              fontSize={"14px"}
            >
              <Text>Blog</Text>
              <Text>Need Help?</Text>
              <Text>Give Feedback</Text>
            </List>
          </Box>
        </Flex>
      </Box>

      <Box textAlign={"center"}  mb={4} mt={{ base: 10, md: 10, lg: 10,sm:10 }}>
        <Text
          fontFamily={"Roboto"}
          fontSize={"14px"}
          fontWeight={400}
          color={"rgba(0, 0, 0, 1)"}
          lineHeight={"24px"}
        >
          Designed & Developed by Proksh Luthra
        </Text>
        <Flex justifyContent={"center"} gap={5} mt={3} cursor={"pointer"}>
          <Image src={gitIcon} color={"rgba(0, 0, 0, 1)"} />
          <Image src={beIcon} color={"rgba(0, 0, 0, 1)"} />
          <Image src={BrowserIcon} color={"rgba(0, 0, 0, 1)"} />
          <Image src={twitterIcon} color={"rgba(0, 0, 0, 1)"} />
          <Image src={linkdenIcon} color={"rgba(0, 0, 0, 1)"} />
        </Flex>
      </Box>
    </>
  );
};
