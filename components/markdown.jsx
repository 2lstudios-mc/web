import { Button, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => (
          <a href={props.href} rel="noreferrer" target="_blank">
            <Button
              variant="link"
              colorScheme={"pink"}
            >
              <Text>{props.children}</Text>
            </Button>
          </a>
        ),
        p: ({ node, ...props }) => <Text color={"gray.300"} fontSize={"18px"} margin={"20px 0"}>{props.children}</Text>,

        h1: ({ node, ...props }) => (
          <Heading color={"white"} margin={"10px 0 "} fontSize={"52px"}>
            {props.children}
          </Heading>
        ),
        h2: ({ node, ...props }) => (
          <Heading color={"white"} margin={"10px 0 "} fontSize={"42px"}>
            {props.children}
          </Heading>
        ),
        h3: ({ node, ...props }) => (
          <Heading color={"white"} fontSize={"32px"}>{props.children}</Heading>
        ),
        h4: ({ node, ...props }) => (
          <Heading color={"white"} fontSize={"22px"}>{props.children}</Heading>
        ),
        h5: ({ node, ...props }) => (
          <Heading color={"white"} fontSize={"12px"}>{props.children}</Heading>
        ),
      }}
    >{content}</ReactMarkdown>
  );
}
