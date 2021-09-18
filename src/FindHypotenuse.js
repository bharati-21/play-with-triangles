import "./styles.css";
import "./styles.css";
import { useState } from "react";

function FindHypotenuse() {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);

  const [hypotenuse, setHypotenuse] = useState("");
  const [playing, setPlaying] = useState(false);

  function handleFindHypotenuse(e) {
    setPlaying(true);
    const baseSquare = sideA ** 2;
    const perpSquare = sideB ** 2;

    const sum = baseSquare + perpSquare;

    const hyp = (Math.sqrt(sum)).toFixed(2);
    setHypotenuse(hyp);
    e.preventDefault();
  }

  return (
    <section className="valid-triangle-section section">
      <h2 className="section-head">
        Enter sides a and b of a right-angled triangle to find the hypotenuse.
      </h2>
      <div className="form">
        <form method="POST" onSubmit={handleFindHypotenuse}>
          <input
            type="number"
            className="sideA"
            id="sideA"
            name="sideA"
            min="0.0001"
            step="0.00001"
            required
            placeholder="Base"
            onChange={(e) => setSideA(e.target.value)}
          />
          <input
            type="number"
            className="sideB"
            id="sideB"
            name="sideB"
            min="0.0001"
            step="0.00001"
            required
            placeholder="Perpendicular"
            onChange={(e) => setSideB(e.target.value)}
          />

          <input
            type="submit"
            className="btn-find-hypo"
            placeholder="Find Hypotenuse"
            onSubmit={(e) => setHypotenuse}
            value="Find Hypotenuse"
          />
          {playing && (
            <input
              type="number"
              className="hypotenuse"
              readOnly
              id="hypotenuse"
              name="hypotenuse"
              value={hypotenuse}
              onChange={(e) => setHypotenuse(e.target.value)}
              required
              placeholder="Hypotenuse"
            />
          )}
        </form>
      </div>
    </section>
  );
}

export { FindHypotenuse };
