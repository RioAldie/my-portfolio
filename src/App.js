import Home from './pages/home';
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
