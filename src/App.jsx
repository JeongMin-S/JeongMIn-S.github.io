import Page from "./layouts/Page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Page></Page>
    </BrowserRouter>
  );
}

export default App;
