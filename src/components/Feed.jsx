import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import BlogPost from "../pages/BlogPost";
import FolderView from "../pages/FolderView"; // 새 컴포넌트
import "../styles/BlogStyles.css";

function Feed({ selectedTag, onTagClick }) {
  return (
    <div id="feed" className="feed">
      <div className="feed-container">
        <Routes>
          <Route
            path="/"
            element={<Home selectedTag={selectedTag} onTagClick={onTagClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/post/*" element={<BlogPost />} />
          <Route
            path="/folders/:folderName"
            element={
              <FolderView selectedTag={selectedTag} onTagClick={onTagClick} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Feed;
