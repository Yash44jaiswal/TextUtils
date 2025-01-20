import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null); // Fix applied here
    }, 3000);
  };

  const removeBodyClasses =() => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  }

  const darkMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is Enabled", "Success : ");
      // document.title = "Texutils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled", "Success : ");
      // document.title = "Texutils - Light Mode";
    }
  };


  return (
    <>
    <BrowserRouter> 
      <Navbar title="TextUtils" about="About" mode={mode} darkMode={darkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;


// Yash Jaiswal
// Ankit Raj