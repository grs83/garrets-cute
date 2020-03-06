import React from "react";
import "./App.css";
import Item from "./item";

const App = () => {
  const createItems = () => {
    const items = [];
    for (let i = 0; i <= 20; i++) {
      items.push(<Item key={i} />);
    }
    return items;
  };

  return <div className="App">{createItems()}</div>;
};

export default App;
