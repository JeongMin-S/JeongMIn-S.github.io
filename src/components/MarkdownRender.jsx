import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchMarkdownContent } from "../util/github"; // 올바른 경로 확인

const MarkdownRenderer = ({ filename }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMarkdownContent(filename).then(setContent);
  }, [filename]);

  return (
    <div className="prose mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
