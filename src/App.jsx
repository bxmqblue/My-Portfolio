import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import MyServices from "./Component/MyServices/MyServices";
import Contact from "./Component/Contact/Contact";
import ScrollUp from "./Component/ScrollUp/ScrollUp";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <MyServices />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
