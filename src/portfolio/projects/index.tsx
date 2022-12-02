import { Box, Stack, Text, VStack } from "@chakra-ui/react";

import SectionHeader from "../../components/SectionHeader";

const ProjectsSection = () => {
  return (
    <Stack
      w={"full"}
      pt={32}
      h={"100vh"}
      bg={"gray.800"}
      spacing={20}
      justifyContent={"space-between"}
    >
      <Stack spacing={10} w={"full"}>
        <Box w={"full"} pos={"relative"}>
          <SectionHeader title={"Projects"} subtitle={"Show Case"} />
        </Box>
        <VStack pt={20}>
          <Text color={"gray.400"} size={"xl"}>
            ... section coming Soon ...
          </Text>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default ProjectsSection;
