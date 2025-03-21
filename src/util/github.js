// GitHub API 설정
const GITHUB_USERNAME = "JeongMin-S";
const REPO_NAME = "postsGitHubIo";
const BRANCH = "main";

// URL속 File List 가져오기
export async function fetchMarkdownFiles(path = "") {
  // path가 비어있으면 루트 경로, 그렇지 않으면 해당 디렉토리 경로를 사용합니다.
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${path}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //값을 json형식으로
    const items = await response.json();

    // items가 배열이 아니면 빈 배열 반환
    let mdFiles = [];
    if (!Array.isArray(items)) {
      return mdFiles;
    }

    for (const item of items) {
      if (item.type === "file" && item.name.endsWith(".md")) {
        mdFiles.push(item);
      } else if (item.type === "dir") {
        // 하위 폴더의 Markdown 파일들을 재귀적으로 가져옵니다.
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

// URL File내용을 Text로 가져오기
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
