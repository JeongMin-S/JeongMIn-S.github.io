import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchMarkdownContent } from "../util/github"; // 올바른 경로 확인
import "github-markdown-css"; // 글로벌로 CSS를 불러옴

const MarkdownRenderer = ({ filename }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMarkdownContent(filename).then(setContent);
  }, [filename]);

  return (
    <div className="markdown-body" style={{ padding: "1rem" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
