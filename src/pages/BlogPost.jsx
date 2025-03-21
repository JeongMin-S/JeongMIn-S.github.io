import React from "react";
import { useParams } from "react-router-dom";
import MarkdownRender from "../components/MarkdownRender.jsx";

const BlogPost = () => {
  const { "*": filePath } = useParams();

  return (
    <div className="container mx-auto p-4">
      <MarkdownRender filename={filePath} />
    </div>
  );
};

export default BlogPost;
