import { HStack, Link, Stack, StackDivider, Text } from "@chakra-ui/react";

import React from "react";
import { genObjectID } from "../../utils/functions";
import { map } from "lodash";

const UserDetails = [
  {
    title: "Name",
    value: "Andrew Kamau",
  },
  {
    title: "Email",
    value: "andrewwaweru388@gmail.com",
  },
  {
    title: "Phone",
    value: "+254 724 042 490",
  },
  {
    title: "Location",
    value: "45 waiyaki way, Nairobi, Kenya",
  },
];

type UserDetailProps = {
  title: string;
  value: string;
};

const UserDetail = ({ title, value }: UserDetailProps) => {
  return (
    <HStack spacing={2} align="center">
      <Text fontSize="md" fontWeight="bold" variant={"text_white"}>
        {title}
      </Text>
      {title === "Email" ? (
        <Link href={`mailto:${value}`} color="orange.500" isExternal>
          {value}
        </Link>
      ) : (
        <Text fontSize="lg" color="gray.500">
          {value}
        </Text>
      )}
    </HStack>
  );
};

const Info = () => {
  return (
    <Stack minW={"xs"} divider={<StackDivider borderColor="gray.500" />}>
      {map(UserDetails, (userDetail) => (
        <UserDetail
          key={genObjectID()}
          title={userDetail.title}
          value={userDetail.value}
        />
      ))}
    </Stack>
  );
};

export default Info;
