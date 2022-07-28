import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { NavbarMenu } from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {
  return (
    <>
      {/* <NavbarMenu /> */}
      <BrowserRouter>
        <Sidebar>
          <Content />
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
