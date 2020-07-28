import React, { ContextType, useState } from "react";
import Header from "./components/Header/Header";
import Deck from "./components/card_deck/deck/Deck";

function App() {
  return (
    <div className="App">
      <Header />
      <Deck />
    </div>
  );
}

export default App;
