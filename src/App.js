import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

import "./App.css";

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
