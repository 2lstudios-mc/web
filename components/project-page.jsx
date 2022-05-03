import Head from 'next/head'
import { Box, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import Markdown from "./markdown";
import ProjectSidebar from "./project-sidebar";

export default function ProjectPage({ projectInfo }) {
    const { content, data, icon, thumbnail } = projectInfo;
    const { name, version, description, brief, links, tags, release_date, update_date } = data;

    return (
        <Flex justifyContent={"space-around"} width={"90%"} margin={"auto"}>
            <Head>
                <title>{name} | 2LStudios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                <meta name="keywords" content={tags.join(", ")} />
                <link rel="shortcut icon" href={icon} type="image/x-icon" />
                <meta property="og:title" content={name + " | 2LStudios"} key="title" />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={thumbnail} />
            </Head>

            <Box 
                width={"65%"} 
                backgroundColor={"#161C27"} 
                padding={"20px"} 
                borderTop={"5px solid white"} 
                borderTopColor={"pink.500"}
                borderRadius={"10px"}
            >
                <Flex alignItems={"center"} borderBottom={"1px solid #3335"} padding={"15px 0"}>
                    <Box>
                        <Image src={icon} width={"84px"}/>
                    </Box>
                    <Box marginLeft={"20px"}>
                        <Heading color={"white"} fontSize={"32px"}>
                            {name} 
                            <Text fontSize={"22px"} color="gray.400" display={"inline"} marginLeft={"10px"}>
                                (v{version})
                            </Text>
                        </Heading>
                        <Text color={"gray.400"}>{brief}</Text>
                        <Box marginTop={"5px"}>
                            { tags.map(tag => <Tag marginRight={"2px"} colorScheme={"pink"}>{tag}</Tag>) }
                        </Box>
                    </Box>
                </Flex>
                
                <Markdown content={content}/>
            </Box>

            <ProjectSidebar
                links={links}
                release_date={release_date}
                update_date={update_date}
            />
        </Flex>
    );
}