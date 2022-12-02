import { Box, HStack, VStack } from "@chakra-ui/react";

import AboutSection from "../features/about";
import ContactSection from "../features/contact";
import FooterSection from "../features/footer";
import HeroSection from "../features/hero";
import PlatformsSection from "../features/platforms";
import ProjectsSection from "../features/projects";
import ResumeSection from "../features/resume";
import Scroll from "react-scroll";
import SideBar from "../components/SideBar";
import { map } from "lodash";

export const { Element, Link, scroller } = Scroll;

const withWrapper = (Component: () => JSX.Element) => {
  const FeatureWrapper = ({ name }: { name: string }) => {
    return (
      <Element name={name} key={name} width={"100%"}>
        <Box as="section" w="100%" h={"100vh"}>
          <Component />
        </Box>
      </Element>
    );
  };

  return FeatureWrapper;
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

const Main = () => (
  <VStack w={"full"} align={"stretch"} p={0}>
    {map(features, (feature) => {
      const Component = feature.component;
      return withWrapper(Component)({ name: feature.name });
    })}
  </VStack>
);

const IndexPage = () => {
  return (
    <HStack w={"full"} spacing={0}>
      <Box as="aside">
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
        <Main />
      </Box>
    </HStack>
  );
};

export default IndexPage;
