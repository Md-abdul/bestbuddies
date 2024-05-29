import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import DimondIcon from "../assets/dimond.png";
import ReactIcon from "../assets/react.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import codeIcons from "../assets/code.png";
import reactIcons from "../assets/react-rounded-icon.png";
import doneIcons from "../assets/right-button.png";
import AddBtnIcon from "../assets/Add-Button.png";
import signupbtn from "../assets/signup-Button.png";
import toggleIcon from "../assets/toggle-icon.png";
import AdIcons from "../assets/add-icons.png";
import AIcons from "../assets/A-alpha.png";
import toggleDubleIcons from "../assets/toggle-duble.png";
import toggleControl from "../assets/toggle-control.png";
import doutedIcon from "../assets/image.png";
import heardIcon from "../assets/image fill.png";
import { Codesnippets } from "./Codesnippets";

export const MidSections = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItems = useBreakpointValue({ base: "flex-start", md: "center" });

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignContent={"center"}
        mt={40}
        gap={10}
      >
        <Box
          display={{ base: "block", md: "none", lg: "block", sm: "none" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mx={2}
        >
          <Box
            width={{ base: "300px", md: "340px" }}
            height={{ base: "300px", md: "340px" }}
            borderRadius="50%"
            border="2px solid #cbcdcf"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            {/* Circul 4 */}
            <Box
              width={{ base: "250px", md: "270px" }}
              height={{ base: "250px", md: "270px" }}
              borderRadius="50%"
              border="2px solid #cbcdcf"
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <Image
                src={doneIcons}
                alt="Done Icon"
                position="absolute"
                bottom="-10px"
                left="10px"
                cursor={"pointer"}
              />
              <Image
                src={signupbtn}
                alt="Done Icon"
                position="absolute"
                bottom="-10px"
                right="-2px"
                cursor={"pointer"}
                // top='-1px'
              />

              {/* Circul 3 */}
              <Box
                width={{ base: "180px", md: "200px" }}
                height={{ base: "180px", md: "200px" }}
                borderRadius="50%"
                border="2px solid #cbcdcf"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={AddBtnIcon}
                  alt="Done Icon"
                  position="absolute"
                  top="15px"
                  left="-40px"
                  cursor={"pointer"}
                />
                <Image
                  src={toggleIcon}
                  alt="Done Icon"
                  position="absolute"
                  top="-10px"
                  right="-40px"
                  cursor={"pointer"}
                />

                {/* Circul 2 */}
                <Box
                  width={{ base: "90px", md: "130px" }}
                  height={{ base: "90px", md: "130px" }}
                  borderRadius="50%"
                  border="2px solid #cbcdcf"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={reactIcons} alt="React Icons" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="40%">
          <Box
            display={"flex"}
            flexDirection={"column"}
            mt={5}
            textAlign={{ base: "left", md: "center" }}
          >
            <Text
              fontFamily={"Roboto"}
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={"semibold"}
              fontSize={{ base: "30px", md: "40px" }}
              textAlign={"left"}
            >
              Beautiful & consistant UI{" "}
            </Text>
            <Text
              fontFamily={"Roboto"}
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={"semibold"}
              fontSize={{ base: "30px", md: "40px" }}
              mt={-3}
              textAlign={"left"}
            >
              powered with{" "}
              <Text as="span" color="rgba(6, 215, 255, 1)">
                React
              </Text>{" "}
              .
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 3, sm: 2 }}
            spacing={{ base: 4, md: 0, sm: 20 }}
            justifyContent="center"
            alignItems="center"
            mt={10}
          >
            <Box mt={4}>
              <Image src={AdIcons} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Atomic
              </Text>
              <Text
                mt={3}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Based
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                on
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                atomic
              </Text>
              <Text
                mb={5}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                desian.
              </Text>
            </Box>

            <Box mt={4}>
              <Image src={AIcons} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Theme Setup
              </Text>
              <Text
                mt={5}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Auto updating
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                colors and
              </Text>
              <Text
                mb={5}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Styleguide.
              </Text>
            </Box>

            <Box mt={4}>
              <Image src={toggleDubleIcons} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Components
              </Text>

              <Text
                mt={5}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Ever-increasing
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                list of
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                components.
              </Text>
            </Box>

            <Box mt={4}>
              <Image src={toggleControl} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Resopnsive
              </Text>
              <Text
                mt={3}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Build fully
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                responsive
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                structures
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                easily.
              </Text>
            </Box>

            <Box mt={4}>
              <Image src={doutedIcon} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Customisation
              </Text>
              <Text
                mt={3}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                Multiple
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                customisations to
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                suit your
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                {" "}
                style.
              </Text>
            </Box>

            <Box mt={4}>
              <Image src={heardIcon} />
              <Text
                mt={5}
                color={"rgba(0, 0, 0, 1)"}
                fontWeight={510}
                fontSize={"18px"}
                fontFamily={"Roboto"}
              >
                Icon System
              </Text>
              <Text
                mt={3}
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                An inbuilt Icon
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                system for
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                faster
              </Text>
              <Text
                color={"rgba(80, 82, 86, 1)"}
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={14}
              >
                development.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Codesnippets />

      <Box textAlign={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={20}
        >
          <Text
            fontFamily={"Roboto"}
            color={"rgba(0, 0, 0, 1)"}
            fontWeight={"semibold"}
            fontSize={"32px"}
            lineHeight={"48px"}
          >
            A combination of tools to design and develop
          </Text>
          <Text
            fontFamily={"Roboto"}
            color={"rgba(0, 0, 0, 1)"}
            fontWeight={"semibold"}
            fontSize={"32px"}
            lineHeight={"48px"}
          >
            modern applications at ease.
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="1200px">
            <Box
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p={7}
              borderRadius={"12px"}
              w={"400px"}
              mx="auto"
            >
              <Image src={DimondIcon} />
              <Text
                fontFamily={"Roboto"}
                fontSize={"26px"}
                fontWeight={500}
                lineHeight={"32px"}
                textAlign={"left"}
                mt={5}
              >
                Design
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                marginRight={"auto"}
                mt={5}
              >
                <Text
                  fontFamily={"Roboto"}
                  color={"rgba(80, 82, 86, 1)"}
                  fontWeight={400}
                  fontSize={"17px"}
                  textAlign={"left"}
                >
                  Design your website by using
                </Text>
                <Text
                  fontFamily={"Roboto"}
                  color={"rgba(80, 82, 86, 1)"}
                  fontWeight={400}
                  fontSize={"17px"}
                  textAlign={"left"}
                >
                  Atomize for Sketch App.
                </Text>
              </Box>
              <Text
                mt={10}
                color={"rgba(2, 132, 254, 1)"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={"14px"}
                cursor={"pointer"}
              >
                Design Resource <ArrowForwardIcon />
              </Text>
            </Box>

            <Box
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p={7}
              borderRadius={"12px"}
              w={"400px"}
              mx="auto"
            >
              <Image src={ReactIcon} />
              <Text
                fontFamily={"Roboto"}
                fontSize={"22px"}
                fontWeight={"semibold"}
                lineHeight={"32px"}
                textAlign={"left"}
                mt={5}
              >
                Development
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                marginRight={"auto"}
                mt={5}
              >
                <Text
                  fontFamily={"Roboto"}
                  color={"rgba(80, 82, 86, 1)"}
                  fontWeight={400}
                  fontSize={"17px"}
                  textAlign={"left"}
                >
                  Bring your designs to life with
                </Text>
                <Text
                  fontFamily={"Roboto"}
                  color={"rgba(80, 82, 86, 1)"}
                  fontWeight={400}
                  fontSize={"17px"}
                  textAlign={"left"}
                >
                  Atomize for React JS.
                </Text>
              </Box>
              <Text
                mt={10}
                color={"rgba(2, 132, 254, 1)"}
                textAlign={"left"}
                cursor={"pointer"}
              >
                Documentation <ArrowForwardIcon />
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* code section */}

      <Box textAlign={"center"} mt={20}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={5}
          mt={20}
          w="100%"
          maxW="1200px"
          mx="auto"
        >
          <Box textAlign={"center"}>
            <Text
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={700}
              fontSize={"32px"}
              fontFamily={"Roboto"}
            >
              15+
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              mt={5}
              textAlign={"center"}
            >
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Ready to use React
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Components
              </Text>
            </Box>
          </Box>

          <Box textAlign={"center"}>
            <Text
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={700}
              fontSize={"32px"}
              fontFamily={"Roboto"}
            >
              60+
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              mt={5}
              textAlign={"center"}
            >
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Predefined colors for
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                theme setup
              </Text>
            </Box>
          </Box>

          <Box textAlign={"center"}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src={codeIcons} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              mt={5}
              textAlign={"center"}
            >
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Detailed documentation
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                for each component
              </Text>
            </Box>
          </Box>

          <Box textAlign={"center"}>
            <Text
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={700}
              fontSize={"32px"}
              fontFamily={"Roboto"}
            >
              FREE
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              mt={5}
              textAlign={"center"}
            >
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                Open source with regular
              </Text>
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
              >
                updates
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* another section */}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          backgroundColor={"rgba(247, 248, 249, 1)"}
          w={"80%"}
          p={5}
          borderRadius={"35px"}
          mt={40}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            mt={5}
          >
            <Text
              fontFamily={"Roboto"}
              color={"rgba(0, 0, 0, 1)"}
              fontWeight={600}
              fontSize={"26px"}
              mb={2}
            >
              UI Templates are on their way 🚀
            </Text>

            <Box
              display="flex"
              flexDirection={flexDirection}
              justifyContent="space-between"
              alignItems={alignItems}
              w="100%"
            >
              <Text
                fontFamily={"Roboto"}
                color={"rgba(80, 82, 86, 1)"}
                fontWeight={400}
                fontSize={"17px"}
                textAlign="left"
              >
                Official UI templates built on Atomize React will be released
                very soon.
              </Text>
              <Button
                backgroundColor={"rgba(0, 0, 0, 1)"}
                color={"white"}
                p={"12px 24px"}
                fontFamily={"Roboto"}
                fontWeight={500}
                fontSize={"13px"}
                borderRadius={"20px"}
                mt={{ base: 4, md: 0 }}
                alignSelf={{ base: "flex-start", md: "center" }}
                _hover={{ backgroundColor: "#373737" }}
              >
                Get notified <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  );
};
