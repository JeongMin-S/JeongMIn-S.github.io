import React, { useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Advertisement from "../components/Advertisement";
import Feed from "../components/Feed";

function Page() {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      {/* 고정 Header (상단) */}
      <Header />

      {/* 실제 콘텐츠: 헤더 높이만큼 위쪽 여백을 줘서 겹치지 않게 함 */}
      <div style={{ marginTop: 60 }}>
        {/* 중앙 정렬 컨테이너 (예: 1040px = Category 240 + Main 800) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            width: 1040,
            margin: "0 auto",
            padding: "20px 0",
            boxSizing: "border-box",
          }}
        >
          {/* Category 영역 (폭 240px) */}
          <div style={{ width: 240 }}>
            <Category />
          </div>

          {/* Main 영역 (폭 800px) */}
          <div style={{ width: 800 }}>
            <Tag onTagClick={setSelectedTag} />
            <Advertisement />
            <Feed selectedTag={selectedTag} onTagClick={setSelectedTag} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
