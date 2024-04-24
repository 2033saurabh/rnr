import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wrirk from './components/Wrirk';
import Review from './components/Review';
import Allrequest from './components/Allrequest';

import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../src/App.css';


function App() {
  return (
    <>
      <div class="container-fluid">
        <div className='row'>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Wrirk" element={<Wrirk />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Allrequest" element={<Allrequest />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
