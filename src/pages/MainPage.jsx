import { Routes, Route } from "react-router-dom";
import Notfound from "./Notfound";
import Info from "./Info";

function MainPage() {
  return (
    <Routes>
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default MainPage;
