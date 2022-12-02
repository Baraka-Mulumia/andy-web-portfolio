import { Text } from "@chakra-ui/react";

const ListHeader = ({ title }: { title: string }) => {
  return (
    <Text
      fontSize={"xl"}
      fontWeight={700}
      textTransform={"capitalize"}
      variant={"text_white"}
    >
      {title}
    </Text>
  );
};

export default ListHeader;
