import React from "react";
import ReactDOM from "react-dom";

const h1Style = { color: "blue", fontSize: "28", border: "2px solid black" };
let greeting = "Hello";

const today = new Date();
const time = today.getHours();

if (time > 18) {
  greeting = "Good night";
  h1Style.color = "black";
} else if (time > 12) {
  greeting = "Good evening";
  h1Style.color = "gray";
} else {
  greeting = "Good morning";
  h1Style.color = "red";
}

function MainHeader() {
  return <h1 style={h1Style}>{greeting} everybody</h1>;
}

ReactDOM.render(
  <div>
    <MainHeader />
    <h2>Our toolbox</h2>
    <ul>
      <li>Server side: Nodejs</li>
      <li>Client side: ReactJS</li>
      <li>RDBMS: PostgreSQL</li>
    </ul>
  </div>,
  document.getElementById("root")
);
