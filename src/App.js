import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      removecls();
      setmode("dark");
      document.body.style.backgroundColor = "#565656";
      document.getElementById("textbox").style.backgroundColor = "#afafaf";
      document.getElementById("textbox").style.cursor = "white";
      showalert("Dark mode successfully activated", "Success");
      document.title = "Text Editor - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("textbox").style.backgroundColor = "white";
      showalert("Light mode successfully activated", "Success");
      document.title = "Text Editor - Light Mode";
    }
  };

  function removecls() {
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  }
  return (
    <Router>
      <Navbar title="Dreamer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route path="/contact">
          <Contact mode={mode} />
        </Route>
        <Route path="/">
          <Main mode={mode} showalert={showalert} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
