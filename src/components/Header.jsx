import React from "react";
import "../styles/HeaderStyles.css"; // 예: 헤더 전용 CSS

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
