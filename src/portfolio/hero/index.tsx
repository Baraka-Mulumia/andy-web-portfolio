import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { MdArrowDownward, MdStickyNote2 } from "react-icons/md";

import AnimatedText from "./AnimatedText";
import { css } from "@emotion/css";
import { scrollIntoSection } from "../../components/NavLinks";

// animate the arrow down icon to bounce up and down
const arrowDownAnimation = css`
  animation: bounce 1s alternate infinite;

  @keyframes bounce {
    from,
    to {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const HeroSection = () => {
  const textItems = [
    "I'm Andrew Kamau.",
    "I work as a Cyber Security Engineer.",
    "I double as a Web Developer.",
  ];

  return (
    <Box
      w={"full"}
      h={"full"}
      backgroundImage={"url(/assets/images/hero-background.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Stack
        w={"full"}
        h={"full"}
        bg={"rgba(17,20,24,0.5)"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        spacing={{
          base: 6,
          md: 10,
        }}
      >
        <Text variant={"text_white"} size={"3xl"}>
          Hello !
        </Text>
        <AnimatedText textItems={textItems} />
        <Text variant={"text_white"} textAlign={"center"} size={"xl"}>
          Currently, I work at CompanyX. Kenya
        </Text>
        <Button
          rounded={"full"}
          colorScheme={"yellow"}
          size={"lg"}
          rightIcon={<MdStickyNote2 />}
        >
          Download CV
        </Button>
      </Stack>
      <Box
        position={"absolute"}
        bottom={10}
        left={"50%"}
        transform={"translateX(-50%)"}
        className={arrowDownAnimation}
        onClick={() => scrollIntoSection("about")}
        cursor={"pointer"}
      >
        <MdArrowDownward color="#fff" size={32} />
      </Box>
    </Box>
  );
};

export default HeroSection;
