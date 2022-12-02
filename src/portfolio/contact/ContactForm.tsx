import { Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";

import { MdMailOutline } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, seSubject] = useState("");

  const handleSubmit = () => {
    console.log(name, email, subject, message);
  };

  return (
    <Stack
      minW={{
        base: "full",
        sm: "sm",
      }}
      spacing={5}
      as={"form"}
      px={4}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Text
        variant={"text_white"}
        fontSize={"2xl"}
        fontWeight={500}
        textTransform={"uppercase"}
      >
        Send me a message
      </Text>
      <Stack spacing={5} direction={{ base: "column", lg: "row" }}>
        <Input
          variant={"input_white"}
          placeholder={"Name"}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          variant={"input_white"}
          placeholder={"Email"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Stack>
      <Input
        variant={"input_white"}
        placeholder={"Subject"}
        required
        value={subject}
        onChange={(e) => seSubject(e.target.value)}
      />
      <Textarea
        variant={"input_white"}
        placeholder={"Message"}
        required
        resize={"none"}
        h={"200px"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        rightIcon={<MdMailOutline />}
        type={"submit"}
        colorScheme={"yellow"}
        variant={"solid"}
      >
        Send Message
      </Button>
    </Stack>
  );
};

export default ContactForm;
