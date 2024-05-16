import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css";
import "./Main.css";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterPart from "./Components/FooterPart";
import MyNavBar from "./Components/MyNavBar";
import EsperienzePage from "./Components/EsperienzePage";
import SideBarHome from "./Components/SideBarHome";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <SideBarHome/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<EsperienzePage />} />
        </Routes>
        <FooterPart />
      </BrowserRouter>
      <Post /> 
    </div>
  );
}

export default App;