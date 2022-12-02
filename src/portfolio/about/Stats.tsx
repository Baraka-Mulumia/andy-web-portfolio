import { Stack, StackDivider, Text } from "@chakra-ui/react";

import React from "react";
import { genObjectID } from "../../utils/functions";
import { map } from "lodash";

const stats = [
  {
    stat: "4+",
    value: "Years of experience",
  },
  {
    stat: "10+",
    value: "Courses & Certificates",
  },
];

type StatsDisplayProps = {
  stat: string;
  value: string;
};

const StatDisplay = ({ stat, value }: StatsDisplayProps) => {
  return (
    <Stack>
      <Text variant={"text_white"} fontSize="4xl" fontWeight="bold">
        {stat}
      </Text>
      <Text variant={"text_white"}>{value}</Text>
    </Stack>
  );
};

const Stats = () => {
  return (
    <Stack
      w={"full"}
      placeItems={"center"}
      placeContent={"center"}
      direction={{ base: "column", md: "row" }}
      divider={<StackDivider borderColor="gray.500" />}
      spacing={10}
    >
      {map(stats, (stat) => (
        <StatDisplay key={genObjectID()} stat={stat.stat} value={stat.value} />
      ))}
    </Stack>
  );
};

export default Stats;
