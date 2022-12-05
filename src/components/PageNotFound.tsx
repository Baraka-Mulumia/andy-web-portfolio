import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

import FootNote from "./FootNote";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <Box minH={"100vh"} position={"relative"}>
      <Container centerContent py={20}>
        <Stack placeContent={"center"} placeItems={"center"} spacing={10}>
          <Image
            src="/assets/images/404.png"
            width={500}
            height={500}
            alt="404"
          />
          <Text fontFamily={"heading"} fontSize={"4xl"}>
            404 - Page Not Found
          </Text>
          <Text textAlign={"center"} maxW={"lg"}>
            The page you are looking for is not available or does not belong to
            this site.
          </Text>
          <Link href="/">
            <Button colorScheme={"orange"} fontSize={"sm"} rounded={"md"}>
              Go back to home page
            </Button>
          </Link>
        </Stack>
      </Container>
      <Box w={"full"} p={10} bg={"gray.900"} position={"absolute"} bottom={0}>
        <FootNote />
      </Box>
    </Box>
  );
};

export default PageNotFound;
