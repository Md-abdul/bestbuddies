import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,Image
} from "@chakra-ui/react";
import Logo from "../assets/logo.png"
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} alignItems="center" justifyContent="space-between">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="1200px"
        w="100%"
      >
        <Box mr={4}>

          <Image src={Logo} cursor={'pointer'} />
        </Box>
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
          mx={"1rem"}
          ml={-20}
        >
          <Link
            px={5}
            py={3}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "gray.200" }}
            href="#"
          >
            <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
              Features
            </Text>
          </Link>
          <Link
            px={5}
            py={3}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "gray.200" }}
            href="#"
          >
            <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
              GitHub
            </Text>
          </Link>
          <Link
            px={5}
            py={3}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "gray.200" }}
            href="#"
          >
            <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
              For Designers
            </Text>
          </Link>
          <Link
            px={5}
            py={3}
            rounded="md"
            backgroundColor="gray.200"
            _hover={{ textDecoration: "none", bg: "gray.400" }}
            href="#"
          >
            <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
              Documentation
            </Text>
          </Link>
        </HStack>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">atomize</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link
                px={5}
                py={3}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                href="#"
              >
                <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
                  Features
                </Text>
              </Link>
              <Link
                px={5}
                py={3}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                href="#"
              >
                <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
                  GitHub
                </Text>
              </Link>
              <Link
                px={5}
                py={3}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                href="#"
              >
                <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
                  For Designers
                </Text>
              </Link>
              <Link
                px={5}
                py={3}
                rounded="md"
                backgroundColor="gray.200"
                _hover={{ textDecoration: "none", bg: "gray.400" }}
                href="#"
              >
                <Text color="#505256" fontFamily="Roboto" fontWeight={500}>
                  Documentation
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
