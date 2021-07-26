import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Button from "./components/Button";
import Footer from "./components/Footer";

import "./App.css";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer name="Find Me Online" />
    </Router>
  );
};

export default App;
