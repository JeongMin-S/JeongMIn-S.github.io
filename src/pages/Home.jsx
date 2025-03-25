import React, { useEffect, useState } from "react";
import { fetchMarkdownFiles } from "../util/github";
import PostCard from "../components/PostCard";
import "../styles/BlogStyles.css"; // CSS 파일 연결

// selectedTag와 onTagClick을 prop으로 받도록 수정합니다.
function Home({ selectedTag, onTagClick }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchMarkdownFiles("")
      .then((files) => setPosts(files))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      {selectedTag && (
        <div className="filter-info">
          <span>
            Filtering by tag: <strong>{selectedTag}</strong>
          </span>
          <button
            className="clear-filter-button"
            onClick={() => onTagClick(null)}
          >
            Clear Filter
          </button>
        </div>
      )}
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

export default Home;
