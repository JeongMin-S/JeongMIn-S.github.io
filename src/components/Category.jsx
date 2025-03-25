import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Category.css";
import { fetchDirectories } from "../util/github";

function Category({ onReset }) {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetchDirectories("")
      .then((dirNames) => setFolders(dirNames))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="category">
      <nav>
        {/* Home 버튼: 클릭 시 onReset 호출하여 태그 초기화 */}
        <Link to="/" className="nav-button" onClick={onReset}>
          Home
        </Link>
        <Link to="/about" className="nav-button">
          About Me
        </Link>
      </nav>
      <hr />
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
