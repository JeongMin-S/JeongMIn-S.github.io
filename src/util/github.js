// src/util/github.js

const GITHUB_USERNAME = "JeongMin-S";
const REPO_NAME = "postsGitHubIo";
const BRANCH = "main";

// URL 속 마크다운 파일 목록을 가져오는 함수
export async function fetchMarkdownFiles(path = "") {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${path}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const items = await response.json();
    let mdFiles = [];
    if (!Array.isArray(items)) {
      return mdFiles;
    }
    for (const item of items) {
      if (item.type === "file" && item.name.endsWith(".md")) {
        mdFiles.push(item);
      } else if (item.type === "dir") {
        try {
          const subFiles = await fetchMarkdownFiles(item.path);
          mdFiles = mdFiles.concat(subFiles);
        } catch (subErr) {
          console.error(
            `Failed to fetch markdown files from directory ${item.path}: ${subErr.message}`
          );
        }
      }
    }
    return mdFiles;
  } catch (err) {
    console.error(`Failed to fetch content from ${url}: ${err.message}`);
    throw err;
  }
}

// URL로부터 마크다운 파일 내용을 텍스트로 가져오는 함수
export async function fetchMarkdownContent(filename) {
  const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${filename}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (err) {
    console.error(
      `Failed to fetch markdown content from ${url}: ${err.message}`
    );
    throw err;
  }
}

// 저장소 내 특정 경로의 폴더 목록을 가져오는 함수
export async function fetchDirectories(path = "") {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const items = await response.json();
    const dirs = items.filter((item) => item.type === "dir");
    const dirNames = dirs.map((dir) => dir.name);
    return dirNames;
  } catch (err) {
    console.error(`Failed to fetch directories: ${err.message}`);
    throw err;
  }
}

// YAML 부분 삭제 함수
export function removeFrontMatter(markdownText) {
  return markdownText.replace(/^---\n([\s\S]*?)\n---\n/, "");
}
