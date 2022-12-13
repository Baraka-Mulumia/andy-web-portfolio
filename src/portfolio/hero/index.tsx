import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
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
    <Stack
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/assets/images/hero-background.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      placeContent={"center"}
      placeItems={"center"}
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
          Currently, I work at{" "}
          <Text as={"span"} variant={"text_white"} fontWeight={"bold"}>
            CybCorp Digital,{" "}
          </Text>
          Kenya
        </Text>
        <Link
          href={
            "https://drive.google.com/file/d/1ON8y21oEyEXe3ZuUP7oc6znzy6IxBl1s/view?usp=sharing"
          }
          target={"_blank"}
          rel={"noopener noreferrer"}
          isExternal
          download={"Andrew Kamau - Resume.pdf"}
        >
          <Button
            rounded={"full"}
            colorScheme={"yellow"}
            size={"lg"}
            rightIcon={<MdStickyNote2 />}
          >
            Download CV
          </Button>
        </Link>
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
    </Stack>
  );
};

export default HeroSection;
