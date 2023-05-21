import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navegator from './complements/Navegator';

import Home from './views/Home';
import Pokemon from './views/Pokemon';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navegator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
