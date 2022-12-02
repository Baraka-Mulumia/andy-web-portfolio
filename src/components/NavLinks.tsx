import { Stack, Text } from "@chakra-ui/react";

import { map } from "lodash";
import { scroller } from "../portfolio";

const LINKS = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "Resume",
    link: "resume",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export function scrollIntoSection(sectionName: string) {
  scroller.scrollTo(sectionName, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    containerId: "scroll-container",
    offset: -50,
  });
}

const InternalNavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <Text
      variant={"text_white"}
      _hover={{
        color: "red.400",
        cursor: "pointer",
      }}
      onClick={() => scrollIntoSection(link)}
    >
      {name}
    </Text>
  );
};

const NavLinks = () => {
  return (
    <Stack spacing={4}>
      {map(LINKS, ({ name, link }) => (
        <InternalNavItem key={name} name={name} link={link} />
      ))}
    </Stack>
  );
};

export default NavLinks;
