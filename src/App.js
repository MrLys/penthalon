import React from 'react';
import './App.css';
import Card from "./components/card/card.component";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
        <Card type={0} suit={"HEART"}/>
        <Card type={0} suit={"SPADES"}/>
        <Card type={0} suit={"DIAMONDS"}/>
        <Card type={0} suit={"CLUBS"}/>
    </div>
  );
}

export default App;
