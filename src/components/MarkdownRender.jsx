import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchMarkdownContent, removeFrontMatter } from "../util/github"; // 파일 경로 확인
import "github-markdown-css"; // 마크다운 CSS

const MarkdownRenderer = ({ filename }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMarkdownContent(filename).then((rawContent) => {
      // YAML front matter 제거
      const cleanedContent = removeFrontMatter(rawContent);
      setContent(cleanedContent);
    });
  }, [filename]);

  return (
    <div className="markdown-body" style={{ padding: "1rem" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
