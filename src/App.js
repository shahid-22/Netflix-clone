import React from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'
import Rowpost from "./components/Rowpost/Rowpost"
import "./App.css"
import {action,romance,originals,trending,horror} from "./urls"
function App() {
  return (
      <div className="App">
      < Navbar/>
      < Banner />
      <Rowpost url={originals} title="Netflix-Originals" />
      <Rowpost url={trending} title="Trending" issmall />
      <Rowpost url={action} title="Action" issmall />
      <Rowpost url={romance} title="Romance" issmall />
      <Rowpost url={horror} title="Horror" issmall />
      </div>
  )
  }
export default App;
