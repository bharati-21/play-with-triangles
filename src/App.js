import "./styles.css";
import "./styles.css";
import { useState } from "react";
import { Angles } from "./Angles";
import { FindHypotenuse } from "./FindHypotenuse";
import { FindArea } from "./FindArea";
import { ThirdAngle } from "./ThirdAngle";
import { Footer } from "./Footer";

const userMenu = {
  "Is Valid Triangle?": <Angles />,
  "Find Hypotenuse": <FindHypotenuse />,
  "Find Area": <FindArea />,
  "Guess Third Angle": <ThirdAngle />
};

export default function App() {
  const [userMenuChoice, setUserMenuChoice] = useState("");

  function menuClickHandler(choice) {
    setUserMenuChoice(choice);
  }

  return (
    <div id="page-wrapper">
      <header className="hero container">
        <nav>
          <h3 className="author">
            <a href="https://bharati-portfolio.netlify.app/" target="_blank">
              Bharati Subramanian
            </a>
          </h3>
          <h3>
            <a
              className="github-repo"
              href="https://github.com/bharati-21/play-with-triangles/"
              target="_blank"
            >
              GitHub Repo
            </a>
          </h3>
        </nav>
        <h1 className="hero-head">Play With Triangles</h1>
        <div className="user-menu">
          {Object.keys(userMenu).map((choice) => {
            return (
              <div
                key={choice}
                className="tab"
                onClick={() => menuClickHandler(userMenu[choice])}
              >
                {choice}
              </div>
            );
          })}
        </div>
      </header>
      <main className="main container">{userMenuChoice}</main>
      <Footer />
    </div>
  );
}
