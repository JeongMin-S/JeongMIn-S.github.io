import React from "react";
import { useParams } from "react-router-dom";
import MarkdownRender from "../components/MarkdownRender.jsx";

const BlogPost = () => {
  const { filename } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">블로그 글 보기</h1>
      <MarkdownRender filename={filename} />
    </div>
  );
};

export default BlogPost;
