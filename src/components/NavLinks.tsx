import { Stack, Text, useMediaQuery } from "@chakra-ui/react";

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
  // {
  //   name: "Projects",
  //   link: "projects",
  // },
  {
    name: "Contact",
    link: "contact",
  },
];

export function scrollIntoSection(sectionName: string, offset = 0) {
  scroller.scrollTo(sectionName, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    containerId: "scroll-container",
    offset,
  });
}

const InternalNavItem = ({ name, link }: { name: string; link: string }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Text
      variant={"text_white"}
      _hover={{
        color: "red.400",
        cursor: "pointer",
      }}
      onClick={() => scrollIntoSection(link, isMobile ? -70 : 0)}
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
