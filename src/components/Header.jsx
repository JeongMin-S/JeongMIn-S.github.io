// Header.jsx
import React from "react";
import "../styles/HeaderStyles.css"; // 별도 파일로 관리

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-container">
        <div className="app-header-brand">JeongMin-S</div>
        <div className="app-header-search">
          <input type="text" placeholder="Search" />
          <button>button</button>
        </div>
        <div className="app-header-user">userIcon</div>
      </div>
    </header>
  );
}

export default Header;
