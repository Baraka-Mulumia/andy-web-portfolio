import { Box, Icon, Link, Stack } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { map } from "lodash";

const LINKS = [
  {
    name: "Github",
    link: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: FaFacebook,
  },
];

type SocialMediaLinkProps = {
  name: string;
  link: string;
  icon: any;
};

const SocialMediaNavItem = ({ name, link, icon }: SocialMediaLinkProps) => {
  return (
    <Link href={link} isExternal>
      <Icon
        as={icon}
        color={"white"}
        _hover={{
          color: "red.400",
        }}
      />
    </Link>
  );
};

const SocialMediaLinks = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {map(LINKS, ({ name, link, icon }) => (
        <SocialMediaNavItem key={name} name={name} link={link} icon={icon} />
      ))}
    </Stack>
  );
};

export default SocialMediaLinks;
