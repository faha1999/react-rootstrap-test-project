import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { NavbarMenu } from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './components/Sidebar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      {/* <NavbarMenu /> */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
