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
        <MdEmail size={20} color={"#FFD700"} />
        <Text variant={"text_white"}>+254 700 000 000</Text>
      </HStack>
      <HStack pb={5}>
        <MdAddIcCall size={20} color={"#FFD700"} />
        <Link href="mailto:andy@gmail.com" isExternal>
          <Text variant={"text_white"}>andy@gmail.com</Text>
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
