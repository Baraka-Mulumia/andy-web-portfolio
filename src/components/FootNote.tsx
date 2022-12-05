import { Box, Link, Text } from "@chakra-ui/react";

const FootNote = () => {
  return (
    <Box w={"full"} p={10} bg={"gray.900"}>
      <Text color={"white"} textAlign={"center"}>
        Made with ❤️{" "}
        <Link href="https://iambaraka.dev" isExternal>
          <Text as={"span"} color={"#FFD700"}>
            iambaraka.dev{" "}
          </Text>
        </Link>
        © {new Date().getFullYear()}
      </Text>
    </Box>
  );
};

export default FootNote;
