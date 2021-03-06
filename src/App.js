import './App.css';
import React from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/list" element={<List/>}/>
         <Route path="/hotels" element={<Hotel/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
