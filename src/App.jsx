import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/home';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Blog from './components/blog';
import Project from './components/project';
import Achievement from './components/achievement';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
