import { Box, Link, Stack, Text } from "@chakra-ui/react";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
// import FootNote from "../../components/FootNote";
import SectionHeader from "../../components/SectionHeader";

const ContactSection = () => {
  return (
    <Stack
      w={"full"}
      pt={32}
      bg={"rgba(0,0,0,0.7)"}
      spacing={20}
      justifyContent={"space-between"}
    >
      <Stack spacing={10} w={"full"}>
        <Box w={"full"} pos={"relative"}>
          <SectionHeader title={"Contact"} subtitle={"Get in Touch"} />
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 20 }}
          placeItems={{ base: "center", md: "flex-start" }}
          placeContent={{ base: "center" }}
          pt={10}
        >
          <ContactDetails />
          <ContactForm />
        </Stack>
      </Stack>
{/*       <FootNote /> */}
    </Stack>
  );
};

export default ContactSection;
