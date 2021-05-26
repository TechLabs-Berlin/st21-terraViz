import React from "react";
import Map from "./map.js";
import Sidebar from "./components/Sidebar.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <Sidebar />
      </div>
    );
  }
}

export default App;
