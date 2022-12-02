import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";
import NavLinks from "../NavLinks";
import ProfileCard from "../ProfileCard";
import SocialMediaLinks from "../SocialMediaLinks";
import { useRef } from "react";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        //@ts-ignore
        ref={btnRef}
        aria-label="Open Menu"
        icon={<FaBars />}
        onClick={onOpen}
        variant={"ghost"}
        color={"white"}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        //@ts-ignore
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={"backgrounds.dark.100"}
          p={2}
          pt={4}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={4}
        >
          <DrawerCloseButton color={"text.dark.100"} />
          <DrawerHeader>
            <ProfileCard />
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            gap={4}
            h={"full"}
            placeContent={"center"}
            onClick={onClose}
          >
            <NavLinks />
          </DrawerBody>
          <DrawerFooter>
            <SocialMediaLinks />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
