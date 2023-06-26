import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [textMode, setTextMode] = useState("dark"); // For dark mode text
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [theme, setTheme] = useState("black");

  const handleTheme = async (darkTheme) => {
    console.log(darkTheme);
    setTheme(() => darkTheme);
    console.log(theme);
    document.querySelector(".newDark").checked = false;
    toggleShades();
  };

  const toggleShades = () => {
    let switchMode = document.querySelector(".newDark").checked;
    if (switchMode === true && theme === "black") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
      showAlert("Black Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode (Black)";
    } else if (switchMode === true && theme === "blue") {
      setMode("blue");
      setTextMode("light");
      document.body.style.backgroundColor = "rgb(9 13 48)";
      document.body.style.color = "#fff";
      showAlert("Blue Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode (Blue)";
    } else if (switchMode === true && theme === "red") {
      setMode("red");
      setTextMode("light");
      document.body.style.backgroundColor = "rgb(80 15 9)";
      document.body.style.color = "#fff";
      showAlert("Red Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode (red)";
    } else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "#eee";
      document.body.style.color = "#222";
      showAlert("Dark Mode has been disabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  const toggleMode = () => {
    // let switchMode = document.querySelector(".newDark").checked;
    // console.log(switchMode);
    if (mode === "light" && textMode === "dark") {
      if (theme === "black") {
        setMode("dark");
        setTextMode("light");
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
        showAlert("Black Dark Mode has been enabled", "success");
        // document.title = "TextUtils - Dark Mode (Black)";
      } else if (theme === "blue") {
        setMode("blue");
        setTextMode("light");
        document.body.style.backgroundColor = "rgb(9 13 48)";
        document.body.style.color = "#fff";
        showAlert("Blue Dark Mode has been enabled", "success");
        // document.title = "TextUtils - Dark Mode (Blue)";
      } else if (theme === "red") {
        setMode("red");
        setTextMode("light");
        document.body.style.backgroundColor = "rgb(80 15 9)";
        document.body.style.color = "#fff";
        showAlert("Red Dark Mode has been enabled", "success");
        // document.title = "TextUtils - Dark Mode (red)";
      }
    } else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "#eee";
      document.body.style.color = "#222";
      showAlert("Dark Mode has been disabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        aboutText="About"
        textMode={textMode}
        toggleMode={toggleMode}
        handleTheme={handleTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} id="about" />}
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                mode={mode}
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter"
                id="home"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
