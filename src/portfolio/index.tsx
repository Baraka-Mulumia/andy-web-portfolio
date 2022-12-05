import { Box, HStack, Stack, VStack } from "@chakra-ui/react";

import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import ProjectsSection from "./projects";
import ResumeSection from "./resume";
import Scroll from "react-scroll";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { map } from "lodash";

export const { Element, Link, scroller } = Scroll;

const withScrollElement = (Component: () => JSX.Element) => {
  const Section = ({ name }: { name: string }) => {
    return (
      <Element name={name} key={name} width={"100%"}>
        <Stack
          as="section"
          w="100%"
          placeContent={"center"}
          placeItems={"center"}
        >
          <Component />
        </Stack>
      </Element>
    );
  };

  return Section;
};

const features = [
  {
    name: "home",
    component: HeroSection,
  },
  {
    name: "about",
    component: AboutSection,
  },
  {
    name: "resume",
    component: ResumeSection,
  },
  // {
  //   name: "projects",
  //   component: ProjectsSection,
  // },
  {
    name: "contact",
    component: ContactSection,
  },
];

const Portfolio = () => {
  return (
    <Box minW={"360px"} bg={"#dddddd"}>
      <TopBar />
      <HStack w={"full"} spacing={0}>
        <Box as="aside" display={{ base: "none", lg: "block" }}>
          <SideBar />
        </Box>
        <Box
          as="main"
          id={"scroll-container"}
          pos={"relative"}
          h="100vh"
          w={"full"}
          overflowY={"scroll"}
        >
          <VStack w={"full"} align={"stretch"} p={0} spacing={0}>
            {map(features, (feature) => {
              const Component = feature.component;
              return withScrollElement(Component)({ name: feature.name });
            })}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Portfolio;
