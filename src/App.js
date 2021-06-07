import { useState } from "react";
import "./App.css";
import Header from "./lib/components/Header";
import Menubar from "./lib/components/Menubar";
import Sidebar from "./lib/components/Sidebar";
import Community from "./lib/pages/Community";
import Donate from "./lib/pages/Donate";
import Home from "./lib/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Content({ page }) {
  return (
    <>
      {page === 0 && <Donate />}
      {page === 1 && <Home />}
      {page === 2 && <Community />}
    </>
  );
}

function App() {
  const [page, setPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Header showSidebar={() => setShowSidebar(true)} />
      <Sidebar show={showSidebar} hide={() => setShowSidebar(false)} />
      <Router>
        <Switch>
          <Route path="/plant">
            
          </Route>
          <Route path="/">
            <Content page={page} />
          </Route>
        </Switch>
      </Router>
      <Menubar page={page} setPage={setPage} />
    </div>
  );
}

export default App;
