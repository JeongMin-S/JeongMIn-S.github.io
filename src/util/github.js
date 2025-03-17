const GITHUB_USERNAME = "JeongMin-S";
const REPO_NAME = "postsGitHubIo";
const BRANCH = "main";

export async function fetchMarkdownFiles() {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/`;
  const response = await fetch(url);
  const files = await response.json();
  return files.filter((file) => file.name.endsWith(".md"));
}

export async function fetchMarkdownContent(filename) {
  const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${filename}`;
  const response = await fetch(url);
  return await response.text();
}
