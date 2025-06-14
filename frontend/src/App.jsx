import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./LandingPage/Home";
import Contact from "./LandingPage/Contact"
import AboutUs from "./LandingPage/AboutUs";
import Trainer from "./LandingPage/Trainer";
import SignUp from "./LandingPage/SignUp";
import NavBar from "./NavBar/NavBar";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </BrowserRouter>
  )
}