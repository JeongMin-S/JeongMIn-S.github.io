import React, { useEffect, useState } from "react";
import { fetchMarkdownFiles, fetchMarkdownContent } from "../util/github";

// YAML frontmatter에서 태그를 추출하는 함수 (PostCard와 동일)
function extractTags(markdownContent) {
  const frontmatterRegex = /^---\n([\s\S]+?)\n---/;
  const match = markdownContent.match(frontmatterRegex);
  if (!match) return [];
  const frontmatter = match[1];
  const tagsRegex = /^tags:\s*(.*)$/m;
  const tagsMatch = frontmatter.match(tagsRegex);
  if (!tagsMatch) return [];
  let tagsLine = tagsMatch[1].trim();
  if (tagsLine.startsWith("[") && tagsLine.endsWith("]")) {
    try {
      const tags = JSON.parse(tagsLine);
      if (Array.isArray(tags)) return tags;
    } catch (e) {
      // JSON 파싱 실패 시 콤마 분리 방식 사용
    }
  }
  return tagsLine
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

// 배열에서 무작위로 count개 요소를 선택하는 함수
function getRandomElements(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// onTagClick prop을 받아서 태그 클릭 시 상위로 전달합니다.
function Tag({ onTagClick }) {
  const [randomTags, setRandomTags] = useState([]);

  useEffect(() => {
    // GitHub API로 마크다운 파일 목록 불러오기
    fetchMarkdownFiles("")
      .then((files) =>
        Promise.all(
          files.map((file) =>
            fetchMarkdownContent(file.path)
              .then((content) => extractTags(content))
              .catch((err) => {
                console.error(err);
                return [];
              })
          )
        )
      )
      .then((tagsArray) => {
        // 평탄화 후 중복 제거
        const allTags = tagsArray.flat();
        const uniqueTags = [...new Set(allTags)];
        const randomSelected = getRandomElements(uniqueTags, 5);
        setRandomTags(randomSelected);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      id="tag"
      style={{
        padding: 0,
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {randomTags.length > 0 ? (
        randomTags.map((tag, index) => (
          <span
            key={index}
            className="post-card-tag" // PostCard의 태그 스타일을 재사용
            onClick={(e) => {
              e.stopPropagation();
              onTagClick(tag);
            }}
            style={{ margin: "0 5px", display: "inline-block" }}
          >
            {tag}
          </span>
        ))
      ) : (
        <p>Loading tags...</p>
      )}
    </div>
  );
}

export default Tag;
