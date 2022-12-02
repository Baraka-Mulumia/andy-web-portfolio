import {
  Box,
  Link as ExtLink,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import Image from "next/image";
import NavLinks from "./NavLinks";
import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const SideBar = () => {
  const borderColor = useColorModeValue("gray.500", "gray.700");

  return (
    <VStack
      w={64}
      bg={"backgrounds.dark.100"}
      border={"1px"}
      borderColor={borderColor}
      h={"100vh"}
      p={2}
      pt={4}
      spacing={4}
      justify={"space-between"}
    >
      <Stack placeItems={"center"} spacing={4}>
        <Box
          bg={"white"}
          rounded={"full"}
          borderColor={borderColor}
          borderWidth={6}
        >
          <Image
            src="/assets/images/andrew-kamau-circular.png"
            alt="Andrew Kamau"
            width={224}
            height={224}
            priority={true}
          />
        </Box>
        <Text size={"3xl"} variant={"text_white"} fontWeight={500}>
          Andrew Kamau{" "}
        </Text>
      </Stack>
      <NavLinks />
      <SocialMediaLinks />
    </VStack>
  );
};

export default SideBar;
