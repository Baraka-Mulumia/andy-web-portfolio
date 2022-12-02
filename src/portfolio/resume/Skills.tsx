import {
  Box,
  HStack,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import ListHeader from "./ListHeader";
import React from "react";
import { genObjectID } from "../../utils/functions";
import { map } from "lodash";
import { skills } from "./data";

type Skill = {
  name: string;
  proficiency: number;
};

const SkillProgress = ({ name, proficiency }: Skill) => {
  return (
    <Stack
      w={{
        base: "full",
        md: 64,
        lg: 96,
      }}
    >
      <HStack justify={"space-between"} w={"full"}>
        <Text
          fontWeight={500}
          noOfLines={1}
          fontSize={"sm"}
          variant={"text_white"}
        >
          {name}
        </Text>
        <Text fontSize={"sm"} variant={"text_white"}>
          {proficiency}%
        </Text>
      </HStack>
      <Progress
        value={proficiency}
        colorScheme="yellow"
        height={1}
        rounded={"sm"}
      />
    </Stack>
  );
};

const Skills = () => {
  return (
    <Stack placeContent={"center"} placeItems={"center"} w={"full"}>
      <Box py={5}>
        <ListHeader title={"My Skills"} />
      </Box>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={10}
        placeContent={"center"}
        placeItems={"center"}
        maxW={"container.lg"}
      >
        {map(skills, (skill) => (
          <SkillProgress key={genObjectID()} {...skill} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Skills;
