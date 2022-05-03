import { Heading, Link, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => (
          <Link color={"pink.400"} to={props.href}>
            {props.children}
          </Link>
        ),
        p: ({ node, ...props }) => <Text color={"gray.300"} fontSize={"18px"}>{props.children}</Text>,

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
    />
  );
}
