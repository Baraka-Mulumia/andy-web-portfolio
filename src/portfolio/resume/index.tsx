import { Box, Divider, Stack } from "@chakra-ui/react";

import Education from "./Education";
import Experience from "./Experience";
import SectionHeader from "../../components/SectionHeader";
import Skills from "./Skills";

const ResumeSection = () => {
  return (
    <Stack
      w={"full"}
      pt={32}
      pb={8}
      bg={"#212529"}
      spacing={20}
      justifyContent={"space-between"}
    >
      <Stack spacing={10} w={"full"} px={2}>
        <Box w={"full"} pos={"relative"}>
          <SectionHeader title={"Summary"} subtitle={"Resume"} />
        </Box>
        <Stack
          spacing={10}
          w={"full"}
          px={2}
          placeSelf={"center"}
          maxW={"container.lg"}
          direction={{ base: "column", md: "row" }}
          placeContent={{
            base: "center",
            md: "space-evenly",
          }}
          placeItems={{
            base: "center",
            md: "start",
          }}
        >
          <Experience />
          <Education />
        </Stack>
        <Divider />
        <Skills />
      </Stack>
    </Stack>
  );
};

export default ResumeSection;
