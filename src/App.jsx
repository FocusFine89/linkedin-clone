import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css";
import "./Main.css";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterPart from "./Components/FooterPart";
import MyNavBar from "./Components/MyNavBar";
import EsperienzePage from "./Components/EsperienzePage";
import HomePage from "./Components/Hompage";
// import SideBarHome from "./Components/SideBarHome";
// import Post from "./Components/Post";
import ModificaEsperienze from "./Components/ModificaEsperienze";
import JobPage from "./Components/JobPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        {/* <SideBarHome /> */}
        {/* <Post /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/profile" element={<Main />} />
          <Route path="/experience/:userID" element={<EsperienzePage />} />
          <Route path="/jobs" element={<JobPage />} />

          <Route
            path="/modifica/:userID/:expID"
            element={<ModificaEsperienze />}
          />
        </Routes>
        <FooterPart />
      </BrowserRouter>
    </div>
  );
}

export default App;
