import { Box, Text } from "@chakra-ui/react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        w={"full"}
        textAlign={"center"}
        transform={"translate(-50%, -50%)"}
      >
        <Text
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
          opacity={0.2}
        >
          {title}
        </Text>
      </Box>
      <Text
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        fontWeight={500}
        variant={"text_white"}
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default SectionHeader;
