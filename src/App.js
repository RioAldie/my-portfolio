import Home from './pages/home';
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Project from './pages/project';
import Blog from './pages/blog';
import BlogItem from './pages/blog/item.blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
