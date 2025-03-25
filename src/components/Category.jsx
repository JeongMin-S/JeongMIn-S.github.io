import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Category.css";
import { fetchDirectories } from "../util/github"; // 폴더 목록을 가져올 함수

function Category() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    // 저장소 루트(또는 원하는 경로)에서 폴더 목록을 가져옴
    fetchDirectories("")
      .then((dirNames) => setFolders(dirNames))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="category">
      <nav>
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/about" className="nav-button">
          About Me
        </Link>
      </nav>
      <hr />
      {/* 폴더 목록 */}
      <div className="folder-list">
        {folders.map((folder) => (
          <Link key={folder} to={`/folders/${folder}`} className="nav-button">
            {folder}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
