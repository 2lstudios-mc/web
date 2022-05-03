import fetch from "cross-fetch";
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';

import { Box } from "@chakra-ui/react";

import ErrorPage from "../components/error-page";
import Loading from "../components/loading";
import ProjectPage from "../components/project-page";

const Error = {
  NONE: -1,
  NOT_FOUND: 404,
  FETCH_ERROR: 500
}

export default function Project() {
  const router = useRouter()
  const { projectId } = router.query;

  const [ project, setProject ] = useState(null);
  const [ error, setError ] = useState(Error.NONE);

  useEffect(() => {
    if (!router.isReady) return;

    fetch("/api/project?projectId=" + projectId).then(async (req) => {
      const data = await req.json();

      if (req.status == 200) {
        setProject(data);
      } else if (req.status == 404) {
        setError(Error.NOT_FOUND);
      } else {
        setError(Error.FETCH_ERROR);
      }
    }).catch((e) => {
      console.error(e);
      setError(Error.FETCH_ERROR);
    });
  }, [router.isReady])

  return (
    <Box>
      { !project && error == Error.NONE && <Loading/> }
      { project && <ProjectPage projectInfo={project} /> }
      { !project && error != Error.NONE && <ErrorPage error={error} /> }
    </Box>
  )
}
  