import { Routes, Route } from "react-router-dom";
import Notfound from "./Notfound";

function Main() {
  return (
    <Routes>
      <Route></Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default Main();
