import {
  Box,
  Button,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoPlaySharp } from "react-icons/io5";
import editIcon from "../assets/edit-icon.png";
import downloadIcon from "../assets/download-icon.png";
import playIcon from "../assets/play-icon.png";
import eyeIcon from "../assets/eye-icon.png";
import fileIcon from "../assets/file-icon.png";
import heartIcon from "../assets/heart-icon.png";
import profileIcons from "../assets/profile-icons.png";
import bridgeIcon from "../assets/bridge-img.png";
import bridgeProfile from "../assets/bridget-profile-icon.png";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import { LuHeart } from "react-icons/lu";
import jhonIcon from "../assets/jhondoe.png";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import gridIcon1 from "../assets/g-1.png";
import gridIcon2 from "../assets/g-2.png";
import gridIcon3 from "../assets/g-3.png";
import gridIcon4 from "../assets/g-4.png";
import { MidSections } from "./MidSections";
// import { Codesnippets } from "./Codesnippets";

export const Home = () => {
  return (
    <>
      <Box textAlign={"center"}  mt={{ base: 10, md: 10, lg: 40,sm:10 }}>
        <Text
          fontSize={"48px"}
          fontWeight={"bold"}
          color={"#000000"}
          fontFamily={"Roboto"}
        >
          Design System for React JS
        </Text>
        <Text
          fontWeight={400}
          fontSize={"17px"}
          color="#505256"
          fontFamily={"Roboto"}
        >
          Atomize React is a UI framework that helps developers collaborate with
          <Text>
            designers and build consistent user interfaces effortlessly.
          </Text>
        </Text>
        <Box mt={20}>
          <Button
            borderRadius={"8px"}
            p={"12px 36.25px"}
            backgroundColor={"#0284FE"}
            color={"white"}
            marginRight={4}
            h={"48px"}
            fontFamily={"Roboto"}
            _hover={{ bg: "#0a5092" }}
          >
            Get Started Now
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            p={"12px 39px"}
            marginRight={4}
            leftIcon={<IoPlaySharp />}
            color={"#505256"}
            h={"48px"}
            fontFamily={"Roboto"}
            borderRadius={"8px"}
            _hover={{ bg: "#b8bfc5" }}
            mt={{ base: 4, md: 0 }}
          >
            Watch Video
          </Button>
        </Box>
      </Box>

      {/* ========== profile sections  ==========  */}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={5}
        mt={20}
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* first box */}
        <Box>
          <Box display={"flex"} gap={4}>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image src={heartIcon} w={"18px"} h={"18px"} />
            </Box>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image w={"18px"} h={"18px"} src={eyeIcon} />
            </Box>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image w={"18px"} h={"18px"} src={editIcon} />
            </Box>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image w={"18px"} h={"18px"} src={fileIcon} />
            </Box>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image w={"18px"} h={"18px"} src={playIcon} />
            </Box>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              }
              p={"14px 14px"}
              borderRadius={"50%"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor={"pointer"}
            >
              <Image w={"18px"} h={"18px"} src={downloadIcon} />
            </Box>
          </Box>

          <Box
            mt={10}
            textAlign={"center"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            p={"25px"}
            borderRadius={"8%"}
          >
            <Box display="flex" justifyContent="center">
              <Image src={profileIcons} />
            </Box>
            <Text
              mt={5}
              fontWeight={"semibold"}
              fontFamily={"Roboto"}
              color={"#000000"}
              fontSize={"22px"}
            >
              Meagan Fisher
            </Text>
            <Text
              fontWeight={400}
              fontSize={12}
              color="#A7AAB0"
              fontFamily={"Roboto"}
              mt={1}
            >
              Engineering Manager
            </Text>
            <Box mt={20}>
              <Button
                borderRadius={"25px"}
                p={"8px 16px"}
                backgroundColor={"#0284FE"}
                color={"white"}
                marginRight={4}
                rightIcon={<AddIcon />}
                h={"48px"}
                fontFamily={"Roboto"}
                _hover={{ bg: "#0a467f" }}
              >
                Follow
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                p={"8px 16px"}
                marginRight={4}
                rightIcon={<ChatIcon />}
                color={"#2e2e2e"}
                h={"48px"}
                fontFamily={"Roboto"}
                borderRadius={"25px"}
                _hover={{ bg: "#b8bfc5" }}
              >
                Message
              </Button>
            </Box>
          </Box>
        </Box>

        {/* second Box */}
        <Box display={{ base: "block", md: "none", lg: "block",sm:'none' }}>
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"5%"}>
            <Box borderRadius={"8px"}>
              <Image
                src={bridgeIcon}
                style={{ width: "350px" }}
                borderRadius={"8px"}
              />
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={3}
              p={2}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Image
                  src={bridgeProfile}
                  w={"30px"}
                  h={"30px"}
                  marginRight={4}
                />
                <Text
                  fontFamily={"Roboto"}
                  color={"rgba(0, 0, 0, 1)"}
                  fontWeight={"semibold"}
                  fontSize={"14px"}
                >
                  Meagan Fisher
                </Text>
              </Box>
              <LuHeart />
            </Box>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={"10px"}
            mt={2}
            display={"flex"}
            alignItems={"center"}
            p={2}
          >
            <Image src={jhonIcon} w={"40px"} h={"40px"} marginRight={4} />
            <Box display={"flex"} flexDirection={"column"} marginRight={"auto"}>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={"semibold"}
                fontSize={"14px"}
              >
                John Doe
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(167, 170, 176, 1)"}
                fontWeight={400}
                fontSize={"12px"}
              >
                UI/UX Designer
              </Text>
            </Box>
            <Box>
              <FiEdit2 />
            </Box>
          </Box>
        </Box>

        {/* third box */}
        <Box
          textAlign={"center"}
          p={10}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius={"15px"}
        >
          <Text
            color={"rgba(0, 0, 0, 1)"}
            fontWeight={500}
            fontFamily={"Roboto"}
            fontSize={"30px"}
          >
            Login into your account
          </Text>
          <Text
            color={"rgba(167, 170, 176, 1)"}
            fontWeight={500}
            fontFamily={"Roboto"}
            fontSize={"16px"}
          >
            Don t have an account yet?{" "}
            <span style={{ color: "rgba(2, 132, 254, 1)" }}>Create New</span>
          </Text>
          <Box mt={20}>
            <InputGroup mb={4}>
              <InputRightElement pointerEvents="none" mt={2}>
                <MdOutlineMail color="rgba(167, 170, 176, 1)" />
              </InputRightElement>
              <Input
                type="email"
                placeholder="johndoe@gmail.com"
                color="rgba(167, 170, 176, 1)"
                placeholderTextColor="rgba(167, 170, 176, 1)"
                borderRadius={"20px"}
                p={6}
              />
            </InputGroup>

            <InputGroup>
              <Input
                type="password"
                placeholder="Password"
                color="rgba(167, 170, 176, 1)"
                placeholderTextColor="rgba(167, 170, 176, 1)"
                borderRadius={"20px"}
                p={6}
              />
              <InputRightElement mt={2}>
                <IoEyeOutline color="rgba(167, 170, 176, 1)" />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            backgroundColor={"rgba(238, 247, 255, 1)"}
            color={"rgba(2, 132, 254, 1)"}
            padding={"9px 11px"}
            mt={10}
            w={"300px"}
            borderRadius={"20px"}
            h={"3rem"}
            _hover={{ backgroundColor: "#eaeaea" }}
          >
            Login
          </Button>
        </Box>
      </Box>


      {/* ========== profile sections 2 ==========  */}    

      <Box mt={20} px={{ base: 10, md: 20 }}>
        <Button
          backgroundColor={"rgba(0, 0, 0, 1)"}
          color={"rgba(255, 255, 255, 1)"}
          borderRadius={"20px"}
          fontSize={12}
          fontFamily={"Roboto"}
          fontWeight={500}
          _hover={{backgroundColor:'#302d2d'}}
        >
          Key features
        </Button>
        <Text
          color={"rgba(0, 0, 0, 1)"}
          fontSize={32}
          fontFamily={"Roboto"}
          fontWeight={500}
          mt={4}
          mb={6}
          textAlign={"left"}
        >
          Why use Atomize React?
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          marginRight={"auto"}
          mb={10}
        >
          <Text
            fontFamily={"Roboto"}
            color={"rgba(80, 82, 86, 1)"}
            fontWeight={400}
            fontSize={"17px"}
            // lineHeight={"30px"}
          >
            Atomize React helps you in building fully responsive websites
          </Text>
          <Text
            fontFamily={"Roboto"}
            color={"rgba(80, 82, 86, 1)"}
            fontWeight={400}
            fontSize={"17px"}
            // lineHeight={"30px"}
          >
            and products that match your style.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={0}
          justifyContent="center"
          alignItems="center"
          mt={10}
          
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={7}
            borderRadius={"12px"}
            width="320px"
            textAlign="left"
            mx="auto"
            mt={{ base: 10, md: 10, lg: 10,sm:10 }}
          >
            <Image src={gridIcon1} />
            <Text
              fontFamily={"Roboto"}
              fontSize={"22px"}
              fontWeight={"semibold"}
              lineHeight={"32px"}
              mt={5}
            >
              Flexible Grid
            </Text>
            <Box display={"flex"} flexDirection={"column"} mt={5}>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Change grid variables or
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                give decimal column size.
              </Text>
            </Box>
            <Text mt={10} color={"rgba(2, 132, 254, 1)"} cursor={'pointer'}>
              See How
            </Text>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={7}
            borderRadius={"12px"}
            width="320px"
            textAlign="left"
            mx="auto"
            mt={{ base: 10, md: 10, lg: 10,sm:10 }}
          >
            <Image src={gridIcon2} />
            <Text
              fontFamily={"Roboto"}
              fontSize={"22px"}
              fontWeight={"semibold"}
              lineHeight={"32px"}
              mt={5}
            >
              Style guide
            </Text>
            <Box display={"flex"} flexDirection={"column"} mt={5}>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Update theme throughout
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                the application easily.
              </Text>
            </Box>
            <Text mt={10} color={"rgba(2, 132, 254, 1)"} cursor={'pointer'}>
              See How
            </Text>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={7}
            borderRadius={"12px"}
            width="320px"
            textAlign="left"
            mx="auto"
            mt={{ base: 10, md: 10, lg: 10,sm:10 }}
          >
            <Image src={gridIcon3} />
            <Text
              fontFamily={"Roboto"}
              fontSize={"22px"}
              fontWeight={"semibold"}
              lineHeight={"32px"}
              mt={5}
            >
              Spacing
            </Text>
            <Box display={"flex"} flexDirection={"column"} mt={5}>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                A better and controlled way
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                of update spacing.
              </Text>
            </Box>
            <Text mt={10} color={"rgba(2, 132, 254, 1)"} cursor={'pointer'}>
              See How
            </Text>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={7}
            borderRadius={"12px"}
            width="320px"
            textAlign="left"
            mx="auto"
            mt={{ base: 10, md: 10, lg: 10,sm:10 }}
          >
            <Image src={gridIcon4} />
            <Text
              fontFamily={"Roboto"}
              fontSize={"22px"}
              fontWeight={"semibold"}
              lineHeight={"32px"}
              mt={5}
            >
              Responsive
            </Text>
            <Box display={"flex"} flexDirection={"column"} mt={5}>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Better control to make the
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                app responsive.
              </Text>
            </Box>
            <Text mt={10} color={"rgba(2, 132, 254, 1)"} cursor={'pointer'}>
              See How
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      
      <MidSections />
    </>
  );
};


