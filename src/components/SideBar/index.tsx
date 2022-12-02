import NavLinks from "../NavLinks";
import ProfileCard from "../ProfileCard";
import React from "react";
import SocialMediaLinks from "../SocialMediaLinks";
import { VStack } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <VStack
      w={64}
      bg={"backgrounds.dark.100"}
      h={"100vh"}
      p={2}
      pt={4}
      spacing={4}
      justify={"space-between"}
    >
      <ProfileCard />
      <NavLinks />
      <SocialMediaLinks />
    </VStack>
  );
};

export default SideBar;
