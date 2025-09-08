import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeIndex from './Components/HomePage/HomeIndex';
import CommunityIndex from './Components/Community/CommunityIndex';
import BlogsIndex from './Components/Blogs/BlogsIndex';
import RecommendIndex from './Components/Recommend/RecommendIndex';
// import About from './pages/About';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/CommunityIndex" element={<CommunityIndex />} />
        <Route path="/BlogsIndex" element={<BlogsIndex />} />
        <Route path="/RecommendIndex" element={<RecommendIndex />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
