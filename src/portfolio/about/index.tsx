import { Box, Divider, Stack, Text } from "@chakra-ui/react";

import Info from "./Info";
import React from "react";
import SectionHeader from "../../components/SectionHeader";
import Stats from "./Stats";

const AboutSection = () => {
  return (
    <Stack
      minH={"100vh"}
      w={"full"}
      pt={32}
      bg={"rgba(0,0,0,0.9)"}
      spacing={20}
      px={4}
      pb={8}
    >
      <Box w={"full"} pos={"relative"}>
        <SectionHeader title={"About Me"} subtitle={"Know Me More"} />
      </Box>
      <Stack
        w={"full"}
        direction={{ base: "column", lg: "row" }}
        placeContent={"center"}
        spacing={{
          base: 4,
          lg: 8,
        }}
        placeItems={"center"}
        pt={10}
      >
        <Stack maxW={"3xl"}>
          <Text
            variant={"text_white"}
            fontWeight={600}
            fontSize={{ base: "2xl", lg: "3xl" }}
          >
            I&apos;m{" "}
            <Text as={"span"} color={"#FFD700"}>
              Andrew Kamau
            </Text>
            , a Cyber Security Engineer {"&"} Web Developer.
          </Text>
          <Stack pr={4}>
            <Text color={"white"} opacity={0.5}>
              Cyber Security Engineer with a wide skill set in different IT
              domains, Cloud enthusiast with strong development skills on AWS
              services.
            </Text>
            <Text color={"white"} opacity={0.5}>
              I&apos;m a self-taught developer with a passion for learning new
              technologies have wide knowledge in software, IT infrastructure,
              cloud, and DevOps, to keep the IT infrastructure and different
              technologies secure.
            </Text>
          </Stack>
        </Stack>
        <Info />
      </Stack>
      <Divider borderColor="gray.500" />
      <Stats />
    </Stack>
  );
};

export default AboutSection;
