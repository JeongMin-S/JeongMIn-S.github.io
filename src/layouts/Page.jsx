import React, { useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Feed from "../components/Feed";

function Page() {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleResetTags = () => {
    setSelectedTag(null);
  };

  return (
    <div>
      {/* Header: 고정되지 않은 일반 헤더 */}
      <Header />

      {/* Category: 고정되어 있으므로 문서 흐름에서 제외됨 */}
      <Category onReset={handleResetTags} />

      {/* Main 영역: Category가 고정되어 있으므로 좌측 여백을 계산 */}
      <div
        style={{
          marginTop: 50, // Header 높이 (예: 60px)
          marginLeft: "calc(50% - 310px)", // 계산: (50% - 520px + 220px + 20px)
          width: 900,
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <Tag onTagClick={setSelectedTag} />
        <Feed selectedTag={selectedTag} onTagClick={setSelectedTag} />
      </div>
    </div>
  );
}

export default Page;
