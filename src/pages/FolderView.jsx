import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { fetchMarkdownFiles } from "../util/github";
import "../styles/BlogStyles.css";

function FolderView({ selectedTag, onTagClick }) {
  const { folderName } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // folderName을 경로로 전달하여 해당 폴더의 .md 파일 목록을 가져옴
    fetchMarkdownFiles(folderName)
      .then((files) => setPosts(files))
      .catch((err) => console.error(err));
  }, [folderName]);

  return (
    <div className="home-container">
      <h2>{folderName}</h2>
      <div className="cards-container">
        {posts.map((post) => (
          <PostCard
            key={post.path}
            post={post}
            selectedTag={selectedTag}
            onTagClick={onTagClick}
          />
        ))}
      </div>
    </div>
  );
}

export default FolderView;
