import { HStack, Text } from "@chakra-ui/react";

import MobileDrawer from "./MobileDrawer";

const TopBar = () => {
  return (
    <HStack
      w={"full"}
      placeContent={"space-between"}
      bg={"backgrounds.dark.100"}
      px={4}
      py={2}
      position={"fixed"}
      top={0}
      zIndex={10}
      left={0}
      display={{ base: "flex", lg: "none" }}
    >
      <Text variant={"text_white"}>Andrew&nbsp;Kamau</Text>
      <MobileDrawer />
    </HStack>
  );
};

export default TopBar;
