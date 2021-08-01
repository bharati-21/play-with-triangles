import "./styles.css";
import "./styles.css";
import { useState } from "react";

function Angles() {
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);

  const [checkTriangle, setCheckTriangle] = useState(false);
  const [playing, setPlaying] = useState(false);

  function handleCheck(e) {
    setPlaying(true);

    console.log(playing, checkTriangle);
    e.preventDefault();
    console.log(parseInt(angleOne) + parseInt(angleTwo) + parseInt(angleThree));
    if (
      parseInt(angleOne) + parseInt(angleTwo) + parseInt(angleThree) !==
      180
    ) {
      setCheckTriangle(false);
    } else {
      setCheckTriangle(true);
    }
  }

  // function setAngles(e, angleNum) {
  //   let angle = Number.parseInt(e.target.value);
  //   if (angleNum === "1") {
  //     setAngleOne(angle);
  //   } else if (angleNum === "2") {
  //     setAngleTwo(angle);
  //   } else {
  //     setAngleThree(angle);
  //   }
  // }

  return (
    <section className="valid-triangle-section section">
      <h2 className="section-head">
        Enter three angles in the below input box to check if they form a valid
        triangle.
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
            onChange={(e) => setAngleTwo(e.target.value)}
          />
          <input
            type="number"
            className="angleThree"
            id="angleThree"
            name="angleThree"
            min="1"
            max="180"
            required
            placeholder="Third Angle"
            onChange={(e) => setAngleThree(e.target.value)}
          />

          <input type="submit" className="btn-check" value="Check Angles" />
        </form>

        {playing &&
          (checkTriangle ? (
            <h3 className="section-output">
              The sum of angles of this triangle is 180.
              <br />
              It is a <strong>VALID</strong> triangle.
            </h3>
          ) : (
            <h3 className="section-output">
              The sum of angles of this triangle is NOT 180.
              <br />
              It is an <strong>INVALID</strong> triangle.
            </h3>
          ))}
      </div>
    </section>
  );
}

export { Angles };
