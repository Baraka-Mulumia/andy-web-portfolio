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

import { HiExternalLink } from "react-icons/hi";
import ListHeader from "./ListHeader";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import { css } from "@emotion/css";
import { experiences } from "./data";
import { genObjectID } from "../../utils/functions";
import { map } from "lodash";

type ExperienceProps = {
  title: string;
  timeline: string;
  company: string;
  companyLink?: string;
  description?: string;
  responsibilities?: string[];
};

const ExperienceCard = (props: ExperienceProps) => {
  const {
    title,
    timeline,
    company,
    companyLink,
    description,
    responsibilities,
  } = props;

  return (
    <Stack
      border={"1px solid "}
      borderColor={"gray.700"}
      shadow={"sm"}
      borderRadius={"4px"}
      py={5}
      px={2}
      minW={80}
      maxW={96}
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
        {title}
      </Text>
      {companyLink ? (
        <Link href={companyLink} isExternal>
          <HStack>
            <Text
              textTransform={"uppercase"}
              fontWeight={500}
              fontSize={"sm"}
              color={"#28a745"}
            >
              {company}
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
          {company}
        </Text>
      )}
      {description && <Text variant={"text_white"}>{description}</Text>}

      {responsibilities?.length && (
        <UnorderedList
          pl={5}
          className={css`
            list-style-type: none;
          `}
        >
          {map(responsibilities, (responsibility) => (
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

const Experience = () => {
  return (
    <Stack>
      <ListHeader title={"My Experience"} />
      <Stack spacing={5}>
        {map(experiences, (experience) => (
          <ExperienceCard key={genObjectID()} {...experience} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;
