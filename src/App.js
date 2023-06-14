import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [textMode, setTextMode] = useState("dark"); // For dark mode text

  const toggleMode = () => {
    if (mode === "light" && textMode === "dark") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "#eee";
      document.body.style.color = "#222";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        aboutText="About TextUtils"
        textMode={textMode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyze below" id="home" />
        {/* <About id="about"/> */}
      </div>
    </>
  );
}

export default App;
