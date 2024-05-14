import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './Style.css'
import './Main.css'

import Main from './Components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterPart from './Components/FooterPart'
import MyNavBar from './Components/MyNavBar'

function App() {
  const userId = '51515'
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Main userId={userId} />} />
        </Routes>
        <FooterPart />
      </BrowserRouter>
    </div>
  )
}

export default App
