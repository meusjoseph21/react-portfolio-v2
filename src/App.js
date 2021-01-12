import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import Main from "./components/section/Main"
import About from "./components/section/About"
import Contact from "./components/section/Contact"
import Portfolio from './components/section/Portfolio';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Portfolio/>
      <About />
      <Contact />
      
    </div>
  );
}

export default App;
