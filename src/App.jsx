import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./pages/router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
