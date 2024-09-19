import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Coins from "./pages/Coins";
import { CoinsProvider } from './components/ContextProvider'; 
import SinglePage from "./pages/SinglePage";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CoinsProvider>
    <Router>
      <Header setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Coins isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/coins/:code' element={<SinglePage />} />
      </Routes>
    </Router>
</CoinsProvider>
  );
}

export default App;
