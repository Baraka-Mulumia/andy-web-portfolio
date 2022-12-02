import {
  Box,
  HStack,
  Link,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { certifications, education } from "./data";

import { HiExternalLink } from "react-icons/hi";
import ListHeader from "./ListHeader";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import { css } from "@emotion/css";
import { genObjectID } from "../../utils/functions";
import { map } from "lodash";

type EducationProps = {
  courseName: string;
  timeline: string;
  institute: string;
  instituteLink?: string;
  description?: string;
  coursesIncluded?: string[];
};

const EducationCard = (props: EducationProps) => {
  const {
    courseName,
    timeline,
    institute,
    instituteLink,
    description,
    coursesIncluded,
  } = props;

  return (
    <Stack
      border={"1px solid "}
      borderColor={"gray.700"}
      borderRadius={"4px"}
      py={5}
      px={2}
      minW={80}
      maxW={96}
      shadow={"sm"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
    >
      <Box bg={"orange.500"} rounded={"md"} w={"fit-content"} py={0.5} px={1}>
        <Text
          fontSize={"sm"}
          fontWeight={500}
          textTransform={"uppercase"}
          variant={"text_white"}
        >
          {timeline}
        </Text>
      </Box>
      <Text fontWeight={600} fontSize={"xl"} variant={"text_white"}>
        {courseName}
      </Text>
      {instituteLink ? (
        <Link href={instituteLink} isExternal>
          <HStack>
            <Text
              textTransform={"uppercase"}
              fontWeight={500}
              fontSize={"sm"}
              color={"#28a745"}
            >
              {institute}
            </Text>
            <HiExternalLink color={"#28a745"} />
          </HStack>
        </Link>
      ) : (
        <Text
          textTransform={"uppercase"}
          fontWeight={500}
          fontSize={"sm"}
          color={"#28a745"}
        >
          {institute}
        </Text>
      )}
      {description && <Text variant={"text_white"}>{description}</Text>}

      {coursesIncluded?.length && (
        <UnorderedList
          pl={5}
          className={css`
            list-style-type: none;
          `}
        >
          {map(coursesIncluded, (responsibility) => (
            <ListItem key={genObjectID()}>
              <Text variant={"text_white"}>
                <ListIcon as={MdCheckCircle} color={"#28a745"} />
                {responsibility}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Stack>
  );
};

const Education = () => {
  return (
    <Stack>
      <Stack>
        <ListHeader title={" My Education"} />
        <Stack spacing={5}>
          {map(education, (item) => (
            <EducationCard key={genObjectID()} {...item} />
          ))}
        </Stack>
      </Stack>
      <Stack spacing={5} pt={10}>
        <ListHeader title={"My Courses and Certifications"} />
        <Stack spacing={5}>
          {map(certifications, (certification) => (
            <EducationCard key={genObjectID()} {...certification} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Education;
