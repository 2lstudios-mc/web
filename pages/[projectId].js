import fetch from "cross-fetch";

import { Box } from "@chakra-ui/react";
import ProjectPage from "../components/project-page";

function Project({ project }) {
  return (
    <Box>
      <ProjectPage projectInfo={project} /> 
    </Box>
  )
}

export async function getServerSideProps({ params }) {
  const url = process.env.NODE_ENV === "production" ? "https://2lstudios.dev" : "http://localhost:3000"
  const res = await fetch(`${url}/api/project?projectId=${params.projectId}`)

  if (res.status != 200) {
    return {
      notFound: true
    }
  } else {
    const data = await res.json();
    return {
      props: {
        project: data
      }
    }
  }
}

export default Project;