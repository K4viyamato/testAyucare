import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./Components/home/Home";
import About from "./Components/About/about";
import Service from "./Components/Services/service";
import Contact from "./Components/Contact/contact";
import Location from "./Components/Location/location";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route  path='/' element={<Home/>}exact/>
        <Route  path='/about' element={<About/>} exact/>
        <Route  path='/services' element={<Service/>} exact/>
        <Route  path='/location' element={<Location/>} exact/>
        <Route  path='/contact' element={<Contact/>} exact />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
