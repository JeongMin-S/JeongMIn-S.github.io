import React, { useEffect, useState } from "react";
import { fetchMarkdownFiles } from "../util/github"; // 위의 코드가 있는 파일
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMarkdownFiles()
      .then((files) => setPosts(files))
      .catch((err) => {
        console.error("Error fetching markdown files:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>블로그 글 목록</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.path}>
              {/* 예: "java/java-variables.md" -> URL: /post/java/java-variables.md */}
              <Link to={`/post/${post.path}`}>
                {post.name.replace(".md", "")}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>글을 불러오는 중...</p>
      )}
    </div>
  );
};

export default Home;
