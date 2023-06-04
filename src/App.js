
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
      
            {/* Aquí va footer */}

      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
