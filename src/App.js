import { useState } from "react";
import "./App.css";
import Header from "./lib/components/Header";
import Menubar from "./lib/components/Menubar";
import Sidebar from "./lib/components/Sidebar";
import Community from "./lib/pages/Community";
import Donate from "./lib/pages/Donate";
import Home from "./lib/pages/Home";

function App() {
  const [page, setPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Header showSidebar={() => setShowSidebar(true)} />
      <Sidebar show={showSidebar} hide={() => setShowSidebar(false)} />
      {page === 0 && <Donate />}
      {page === 1 && <Home />}
      {page === 2 && <Community />}
      <Menubar page={page} setPage={setPage} />
    </div>
  );
}

export default App;
