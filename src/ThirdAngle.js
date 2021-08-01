import "./styles.css";
import "./styles.css";
import { useState } from "react";

function ThirdAngle() {
  const [angleOne, setAngleOne] = useState("");
  const [angleTwo, setAngleTwo] = useState("");
  const [angleThree, setAngleThree] = useState("");

  const [correctAngle, setCorrectAngle] = useState(0);

  const [checkTriangle, setCheckTriangle] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [guessed, setGuessed] = useState(false);

  function handleCheck(e) {
    setGuessed(true);
    e.preventDefault();
    if (Number.parseInt(angleThree) === correctAngle) {
      setCheckTriangle(true);
    } else {
      setCheckTriangle(false);
    }
  }

  function generateAngles() {
    setPlaying(true);
    setGuessed(false);
    setAngleThree("");

    let aOne = Math.floor(Math.random() * 180) + 1;
    let aTwo = Math.floor(Math.random() * 180) + 1;

    while (aOne + aTwo >= 180) {
      if (aOne > aTwo) {
        aOne = Math.floor(Math.random() * 180) + 1;
      } else {
        aTwo = Math.floor(Math.random() * 100) + 1;
      }
    }
    console.log(aOne, aTwo);
    setAngleOne(aOne);
    setAngleTwo(aTwo);
    setCorrectAngle(180 - (aOne + aTwo));
  }

  return (
    <section className="valid-triangle-section section">
      <h2 className="section-head">
        Guess the third angle in the input box below, to check if it forms a
        valid triangle with the given two angles.
      </h2>
      <div className="form">
        <form method="POST" onSubmit={handleCheck}>
          <input
            type="number"
            className="angleOne"
            id="angleOne"
            name="angleOne"
            min="1"
            max="180"
            required
            placeholder="First Angle"
            value={angleOne}
            readOnly
            onChange={(e) => setAngleOne(e.target.value)}
          />
          <input
            type="number"
            className="angleTwo"
            id="angleTwo"
            name="angleTwo"
            min="1"
            max="180"
            required
            placeholder="Second Angle"
            readOnly
            value={angleTwo}
            onChange={(e) => setAngleTwo(e.target.value)}
          />

          <input
            type="button"
            className="btn-generate"
            value="Generate Angles"
            onClick={generateAngles}
          />

          {playing && (
            <div className="third-angle-submit">
              <input
                type="number"
                className="angleThreeGuess"
                id="angleThreeGuess"
                name="angleThreeGuess"
                min="1"
                max="180"
                required
                value={angleThree}
                placeholder="Guess Third Angle"
                onChange={(e) => setAngleThree(e.target.value)}
              />

              <input type="submit" className="btn-guess" value="Check Guess" />
            </div>
          )}
        </form>

        {guessed &&
          (checkTriangle ? (
            <h3 className="section-output">Correct Guess!</h3>
          ) : (
            <h3 className="section-output">
              Incorrect Guess.
              <br />
              Try Again.
            </h3>
          ))}
      </div>
    </section>
  );
}

export { ThirdAngle };
