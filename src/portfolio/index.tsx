import { Box, HStack, VStack } from "@chakra-ui/react";

import AboutSection from "./about";
import ContactSection from "./contact";
import FooterSection from "./footer";
import HeroSection from "./hero";
import PlatformsSection from "./platforms";
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
        <Box as="section" w="100%" h={"100vh"}>
          <Component />
        </Box>
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
    name: "platforms",
    component: PlatformsSection,
  },
  {
    name: "resume",
    component: ResumeSection,
  },
  {
    name: "projects",
    component: ProjectsSection,
  },
  {
    name: "contact",
    component: ContactSection,
  },
  {
    name: "footer",
    component: FooterSection,
  },
];

const Portfolio = () => {
  return (
    <Box minW={"360px"}>
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
          <VStack w={"full"} align={"stretch"} p={0}>
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
