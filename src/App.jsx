import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./pages/router";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./pages/Contactus/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>{/* <Navbar></Navbar> */}</Router>
      </BrowserRouter>
    </>
  );
}

export default App;
