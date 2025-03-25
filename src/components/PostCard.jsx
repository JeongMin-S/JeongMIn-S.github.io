// PostCard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMarkdownContent } from "../util/github";
import "../styles/BlogStyles.css"; // CSS 파일 연결

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
      // 파싱 실패 시 콤마 분리 방식 사용
    }
  }
  return tagsLine
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function PostCard({ post, selectedTag, onTagClick }) {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMarkdownContent(post.path)
      .then((content) => {
        const extractedTags = extractTags(content);
        setTags(extractedTags.slice(0, 5));
      })
      .catch((err) => console.error(err));
  }, [post.path]);

  if (selectedTag && tags.length > 0 && !tags.includes(selectedTag)) {
    return null;
  }

  const handleCardClick = () => {
    navigate(`/post/${post.path}`);
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    onTagClick(tag);
  };

  return (
    <div className="post-card" onClick={handleCardClick}>
      <h3 className="post-card-title">{post.name.replace(".md", "")}</h3>

      <div className="post-card-tags">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="post-card-tag"
            onClick={(e) => handleTagClick(e, tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
