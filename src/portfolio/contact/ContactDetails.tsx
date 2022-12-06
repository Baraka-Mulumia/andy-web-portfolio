import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { MdAddIcCall, MdEmail } from "react-icons/md";

import React from "react";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const ContactDetails = () => {
  return (
    <Stack>
      <Text
        variant={"text_white"}
        fontSize={"2xl"}
        fontWeight={500}
        textTransform={"uppercase"}
      >
        Contact Details
      </Text>
      <HStack>
        <MdAddIcCall size={20} color={"#FFD700"} />
        <Text variant={"text_white"}>++254 724 042 490</Text>
      </HStack>
      <HStack pb={5}>
        <MdEmail size={20} color={"#FFD700"} />
        <Link href="mailto:andrewwaweru388@gmail.com" isExternal>
          <Text variant={"text_white"}>andrewwaweru388@gmail.com</Text>
        </Link>
      </HStack>
      <Text
        variant={"text_white"}
        fontSize={"2xl"}
        fontWeight={500}
        textTransform={"uppercase"}
      >
        Lets Connect
      </Text>
      <SocialMediaLinks />
    </Stack>
  );
};

export default ContactDetails;
