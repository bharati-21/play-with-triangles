import "./styles.css";
import "./styles.css";
import { useState } from "react";
import { Angles } from "./Angles";

const userMenu = {
  gameOne: "Angles of Triangle",
  gameTwo: "Area of Triangle",
  gameThree: "Find the Third Angle",
  gameFour: "What's the Hypotenuse?"
};

export default function App() {
  return (
    <div id="page-wrapper">
      <header>
        <h1 class="author">Bharati Subramanian</h1>
        <a class="github-repo" href=""></a>
      </header>
      <main class="main"></main>
    </div>
  );
}
