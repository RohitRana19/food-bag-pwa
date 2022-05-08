import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ padding: "2vw", margin: "2vh" }}>
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
