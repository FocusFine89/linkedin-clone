import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css";
import "./Main.css";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterPart from "./Components/FooterPart";
import MyNavBar from "./Components/MyNavBar";
import EsperienzePage from "./Components/EsperienzePage";
import ModificaEsperienze from "./Components/ModificaEsperienze";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience/:userID" element={<EsperienzePage />} />
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
