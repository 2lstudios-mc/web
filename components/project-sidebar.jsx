import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {
  BsGithub,
  BsPaypal,
  BsBook,
  BsDiscord,
  BsTwitter,
} from "react-icons/bs";
import { FaJenkins } from "react-icons/fa";
import { BiStore, BiStats } from "react-icons/bi";

const Settings = {
  buy: {
    children: "Buy on website",
    scheme: "green",
    icon: BiStore,
  },
  bstats: {
    children: "View on bstats",
    scheme: "yellow",
    icon: BiStats,
  },
  discord: {
    children: "Get Support on Discord",
    scheme: "purple",
    icon: BsDiscord,
  },
  github: {
    children: "View on GitHub",
    scheme: "whiteAlpha",
    icon: BsGithub,
  },
  jenkins: {
    children: "View on Jenkins",
    scheme: "orange",
    icon: FaJenkins,
  },
  mcmarket: {
    children: "Buy on MC-Market",
    scheme: "cyan",
    icon: BiStore,
  },
  paypal: {
    children: "Donate on PayPal",
    scheme: "blue",
    icon: BsPaypal,
  },
  twitter: {
    children: "View on Twitter",
    scheme: "twitter",
    icon: BsTwitter,
  },
  wiki: {
    children: "View Wiki",
    scheme: "red",
    icon: BsBook,
  },
};

function ProjectLink(props) {
  return (
    <a href={props.url} rel="noreferrer" target="_blank">
      <Button
        variant="solid"
        colorScheme={props.scheme || "pink"}
        size="lg"
        width="70%"
        marginBottom={"10px"}
      >
        <props.icon fontSize="28px" />
        <Text marginLeft={"10px"}>{props.children}</Text>
      </Button>
    </a>
  );
}

function getLink(key, value) {
  const config = Settings[key];
  if (config != null) {
    return <ProjectLink {...config} url={value} />;
  }
}

function getLinks(links) {
  const components = [];

  for (const key of Object.keys(links)) {
    const value = links[key];
    components.push(getLink(key, value));
  }

  return components;
}

function KeyValue({ keyName, value }) {
  return (
    <Flex justifyContent={"space-between"} fontSize={"18px"}>
      <Text color="white" fontWeight={"bold"} display="block">
        {keyName}
      </Text>
      <Text color="gray.300" display="block">
        {value}
      </Text>
    </Flex>
  );
}

export default function ProjectSidebar({ links, release_date, update_date }) {
  const release = new Date(release_date);
  const update = new Date(update_date);

  return (
    <Box
      backgroundColor={"#161C27"}
      width={"400px"}
      padding={"20px"}
      borderTop={"5px solid white"}
      borderTopColor={"pink.500"}
      borderRadius={"10px"}
    >
      <Box marginBottom={"20px"}>
        {release_date && (
          <KeyValue
            keyName={"Released:"}
            value={
              release.toLocaleDateString() +
              " at " +
              release.toLocaleTimeString()
            }
          />
        )}
        {update_date && (
          <KeyValue
            keyName={"Last Updated:"}
            value={
              update.toLocaleDateString() + " at " + update.toLocaleTimeString()
            }
          />
        )}
      </Box>

      <Box marginBottom={"20px"} textAlign={"center"}>
        {getLinks(links)}
      </Box>
    </Box>
  );
}
