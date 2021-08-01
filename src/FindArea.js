import "./styles.css";
import "./styles.css";
import { useState } from "react";

function FindArea() {
  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);

  const [area, setArea] = useState("");
  const [playing, setPlaying] = useState(false);

  function handleFindArea(e) {
    setPlaying(true);
    const a = (1 / 2) * height * base;
    setArea(a);
    e.preventDefault();
  }

  return (
    <section className="area-triangle section">
      <h2 className="section-head">
        Enter height and base of a triangle to find the area.
      </h2>
      <div className="form">
        <form method="POST" onSubmit={handleFindArea}>
          <input
            type="number"
            className="height"
            id="height"
            name="height"
            min="1"
            max="180"
            required
            placeholder="Height"
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            className="base"
            id="base"
            name="base"
            min="1"
            max="180"
            required
            placeholder="Base"
            onChange={(e) => setBase(e.target.value)}
          />

          <input
            type="submit"
            className="btn-find-area"
            placeholder="Find Area"
            onSubmit={(e) => handleFindArea}
            value="Find Area"
          />
          {playing && (
            <h3 className="section-output">
              The area of the triangle is{" "}
              <span style={{ fontSize: "1.4rem" }}>{area}</span>
            </h3>
          )}
        </form>
      </div>
    </section>
  );
}

export { FindArea };
