import Link from 'next/link'
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { BsGithub, BsPaypal, BsDiscord } from "react-icons/bs";
import { GiAxolotl } from "react-icons/gi"
import { FaJenkins } from "react-icons/fa"

function SocialIcon(props) {
    return (
        <Box marginLeft={"20px"}>
            <IconButton variant={"ghost"} colorScheme={"white"} icon={<props.icon fontSize={"28px"} />}/>
        </Box>
    )
}

function NavLink({ children, href }) {
  return (
    <Box
      color={"white"}
      margin={"0px 30px"}
      fontSize={"24px"}
      fontWeight={"bold"}
    >
      <Link href={href}>{children}</Link>
    </Box>
  );
}

export default function Navbar() {
  return (
    <Box position={"fixed"} width={"100%"}>
      <Box backgroundColor={"#161C27"} padding={"15px 30px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} color={"white"} fontSize={24}>
            <GiAxolotl fontSize={48} />
            <Heading marginLeft={"24px"}>2LStudios</Heading>
          </Flex>
          <Flex color={"white"}>
            <SocialIcon icon={BsDiscord} />
            <SocialIcon icon={BsGithub} />
            <SocialIcon icon={FaJenkins} />
            <SocialIcon icon={BsPaypal} />
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor={"#161C27bb"} padding={"10px 30px"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Projects</NavLink>
          <NavLink href="/">Team</NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
