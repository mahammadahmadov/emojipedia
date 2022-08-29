import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia";

function createCard(data) {
  return <Card key= {data.id} emoji={data.emoji} name={data.name} meaning={data.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
