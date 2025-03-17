import Page from "./layouts/Page";
import "./styles/reset.css";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Page></Page>
      </HashRouter>
    </>
  );
}

export default App;
