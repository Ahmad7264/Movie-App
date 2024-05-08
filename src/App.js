import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
// const API_ENDPOINT = "http://www.omdbapi.com/?i=tt3896198&apikey=c6681ace";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
