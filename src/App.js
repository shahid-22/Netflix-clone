import React from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'
import Rowpost from "./components/Rowpost/rowpost"
import "./App.css"
function App() {
  return (
      <div className="App">
      < Navbar/>
      < Banner />
      <Rowpost title="Netflix-Originals" />
      <Rowpost title="Action" issmall />
      <Rowpost title="Action" issmall />
      </div>
  )
  }
export default App;
