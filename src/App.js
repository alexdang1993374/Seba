import React, { useState } from "react";
//Components
import Player from "./components/Player";
import Song from "./components/Songs";
//Data
import data from "./data";
//Style
import "./styles/app.scss";

function App() {
  //State
  const [songs, setSongs] = useState(data());

  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
