import React from 'react';
import { Footer, Header, NotFound } from './components';
import { Burger, Orders } from './containers'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/burger" element={<Burger />} />
          <Route path="/burger/orders" element={<Orders />} />
          <Route path="/burger/faq" element={<div><p>Hello from FAQ page</p></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
