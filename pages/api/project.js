import fetch from "cross-fetch";

const cache = new Map();
const notExist = new Set();

function getProjectFileUrl(projectId, file) {
  return (
    "https://github.com/2lstudios-mc/web-content/raw/main/projects/" +
    projectId +
    "/" +
    file
  );
}

function fetchProjectFile(projectId, file) {
  return fetch(getProjectFileUrl(projectId, file));
}

setInterval(() => {
  cache.clear();
  notExist.clear();
}, 24 * 60 * 60 * 1000);

async function getProject(projectId) {
  const dataReq = await fetchProjectFile(projectId, "data.json");
  if (dataReq.status != 200) {
    return null;
  } else {
    const contentReq = await fetchProjectFile(projectId, "content.md");
    const data = await dataReq.json();
    const content = await contentReq.text();

    return {
      data,
      content,
      thumbnail: getProjectFileUrl(projectId, "thumbnail.jpg"),
      icon: getProjectFileUrl(projectId, "icon.png"),
    };
  }
}

export default async function handler(req, res) {
  let { projectId } = req.query;

  if (!projectId) {
    return res.status(400).json({ error: "Project id isn't specified." });
  } else {
    projectId = projectId.toLowerCase();
  }

  if (!notExist.has(projectId)) {
    if (cache.has(projectId)) {
      return res.status(200).json(cache.get(projectId))  
    } else {
      const project = await getProject(projectId);
      if (project != null) {
        cache.set(projectId, project);
        return res.status(200).json(project);
      } else {
        notExist.add(projectId);
      }
    }
  }

  res.status(404).json({ error: "Project with ID " + projectId + " doesn't exist."});
}
