
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import GreenHub from './Containers/GreenHub/GreenHub'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greenhub" element={<GreenHub />} />

      </Routes>
      
      <Footer/>      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
