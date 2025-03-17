import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import BlogPost from "../pages/BlogPost";

function Feed() {
  return (
    <div
      id="feed"
      style={{
        border: "1px solid black",
        flex: 1,
        flexGrow: 1,
        padding: 20,
        boxSizing: "border-box",
        overflowY: "auto",
        textAlign: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post/:filename" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default Feed;
