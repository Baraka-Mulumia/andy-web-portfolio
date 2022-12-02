import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  const borderColor = useColorModeValue("gray.500", "gray.700");

  return (
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
  );
};

export default ProfileCard;
