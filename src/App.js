import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import F1 from './components/F1';
import Nav from './components/Nav';
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home,About, Blog , Contact } from './components/F2';
import { React } from 'react';
function App() {
  return (
    <div >
      {/* <F1 /> */}
      <HashRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
