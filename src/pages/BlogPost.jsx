import React from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../components/MarkdownRenderer.jsx";

const BlogPost = () => {
  const { "*": filePath } = useParams();

  return (
    <div className="container mx-auto p-4">
      <MarkdownRenderer filename={filePath} />
    </div>
  );
};

export default BlogPost;
