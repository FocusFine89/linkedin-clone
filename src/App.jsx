import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css";
import "./Main.css";

import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
