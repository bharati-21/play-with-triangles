import "./styles.css";
import { useState } from "react";

const answers = [
  "yes",
  "yes",
  "no",
  "isosceles",
  "equilateral",
  "scalene",
  "isosceles",
  "equilateral",
  "obtuse",
  "15"
];

function Quiz() {
  const [playing, setPlaying] = useState(false);
  const [rightInput, setRightInput] = useState("");
  
  const [state, setState] = React.useState({
    question-one: "",
    lastName: ""
  })

  const [score, setScore] = useState(0);

  let wrongAnswers = [];

  function handleSubmit(e) {
    
  }

  return (
    <section className="triangle-quiz-section section">
      <h2 className="section-head">
        Choose the correct answer for the questions below
      </h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {/* Question one */}
          <div className="question-menu">
            <label className="label question-one">
              A triangle has angles: 45<sup>0</sup>, 45<sup>0</sup> and 90
              <sup>0</sup>. Is this a right angled triangle?
            </label>
            <input
              type="radio"
              name="questionOne"
              id="questionOneYes"
              value="yes"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="questionOneYes">Yes</label>
            <input
              type="radio"
              name="questionOne"
              id="questionOneNno"
              value="no"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="questionOneNno">No</label>
          </div>

          {/* Question Two */}
          {/* <div className="question-menu">
            <label className="label question-two">
              A triangle has angles: 136<sup>0</sup>, 24<sup>0</sup> and 20
              <sup>0</sup>. Is this an obtuse angled triangle?
            </label>
            <input
              type="radio"
              name="question-two"
              id="question-two-yes"
              value="yes"
              onChange={(e) => ""Two(e.target.value)}
            />
            <label for="question-two-yes">Yes</label>
            <input
              type="radio"
              name="question-two"
              id="question-two-no"
              value="no"
              onChange={(e) => Two(e.target.value)}
            />
            <label for="question-two-no">No</label>
          </div> */}

          {/* Question Three */}
          {/* <div className="question-menu">
            <label className="label question-three">
              A triangle has angles: 70<sup>0</sup>, 50<sup>0</sup> and 60
              <sup>0</sup>. Is this an obtuse angled triangle?
            </label>
            <input
              type="radio"
              name="question-three"
              id="question-three-yes"
              value="yes"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-three-yes">Yes</label>
            <input
              type="radio"
              name="question-three"
              id="question-three-no"
              value="no"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-three-no">No</label>
          </div> */}

          {/* Question Four */}
          {/* <div className="question-menu">
            <label className="label question-four">
              A triangle has 2 sides with length: 16, and one side 12. What kind
              of a triangle is this?
            </label>

            <input
              type="radio"
              name="question-four"
              id="question-four-eq"
              value="equilateral"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-four-eq">Equilateral</label>

            <input
              type="radio"
              name="question-four"
              id="question-four-sc"
              value="scalene"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-four-sc">Scalene</label>

            <input
              type="radio"
              name="question-four"
              id="question-four-is"
              value="isosceles"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-four-is">Isosceles</label>
          </div> */}

          {/* Question Five */}
          {/* <div className="question-menu">
            <label className="label question-five">
              A triangle has all a length of 5 in all three. What kind of a
              triangle is this?
            </label>

            <input
              type="radio"
              name="question-five"
              id="question-five-eq"
              value="equilateral"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-five-eq">Equilateral</label>

            <input
              type="radio"
              name="question-five"
              id="question-five-sc"
              value="scalene"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-five-sc">Scalene</label>

            <input
              type="radio"
              name="question-five"
              id="question-five-is"
              value="isosceles"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-five-is">Isosceles</label>
          </div> */}

          {/* Question Six */}
          {/* <div className="question-menu">
            <label className="label question-six">
              A triangle sides with length: 35, 46 and 44. What kind of a
              triangle is this?
            </label>

            <input
              type="radio"
              name="question-six"
              id="question-six-eq"
              value="equilateral"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-six-eq">Equilateral</label>

            <input
              type="radio"
              name="question-six"
              id="question-six-is"
              value="isosceles"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-six-is">Isosceles</label>

            <input
              type="radio"
              name="question-six"
              id="question-six-sc"
              value="scalene"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-six-sc">Scalene</label>
          </div> */}

          {/* Question Seven */}
          {/* <div className="question-menu">
            <label className="label question-seven">
              A triangle has angles: 45<sup>0</sup>, 45<sup>0</sup> and 90
              <sup>0</sup>. Choose the type of triangle.
            </label>

            <input
              type="radio"
              name="question-seven"
              id="question-seven-eq"
              value="equilateral"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-seven-eq">Equilateral</label>

            <input
              type="radio"
              name="question-seven"
              id="question-seven-sc"
              value="scalene"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-seven-sc">Scalene</label>

            <input
              type="radio"
              name="question-seven"
              id="question-seven-is"
              value="isosceles"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-seven-is">Isosceles</label>
          </div> */}

          {/* Question Eight */}
          {/* <div className="question-menu">
            <label className="label question-eight">
              A triangle has angles: 60<sup>0</sup>, 60<sup>0</sup> and 60
              <sup>0</sup>. Choose the type of triangle.
            </label>

            <input
              type="radio"
              name="question-eight"
              id="question-eight-eq"
              value="equilateral"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-eight-eq">Equilateral</label>

            <input
              type="radio"
              name="question-eight"
              id="question-eight-sc"
              value="scalene"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-eight-sc">Scalene</label>

            <input
              type="radio"
              name="question-eight"
              id="question-eight-is"
              value="isosceles"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-eight-is">Isosceles</label>
          </div> */}

          {/* Question Nine */}
          {/* <div className="question-menu">
            <label className="label question-eight">
              A triangle has angles: 120<sup>0</sup>, 20<sup>0</sup> and 40
              <sup>0</sup>. Choose the type of triangle.
            </label>

            <input
              type="radio"
              name="question-nine"
              id="question-nine-eq"
              value="equiangular"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-nine-eq">Equiangular</label>

            <input
              type="radio"
              name="question-nine"
              id="question-nine-ac"
              value="acute"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-nine-ac">Acute</label>

            <input
              type="radio"
              name="question-nine"
              id="question-nine-ob"
              value="obtuse"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-nine-ob">Obtuse</label>
          </div> */}

          {/* Question Ten */}
          {/* <div className="question-menu">
            <label className="label question-ten">
              A triangle has a perimeter of 45. What is the length of one side?
            </label>

            <input
              type="radio"
              name="question-ten"
              id="question-ten-val1"
              value="9"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-ten-val1">9</label>

            <input
              type="radio"
              name="question-ten"
              id="question-ten-val2"
              value="15"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-ten-val2">15</label>

            <input
              type="radio"
              name="question-ten"
              id="question-ten-val3"
              value="3"
              onChange={(e) => setState(e.target.value)}
            />
            <label for="question-ten-val3">3</label>
          </div> */}
          <input
            type="submit"
            className="btn-calculate"
            value="Calculate Score"
          />
        </form>
        {playing && !rightInput && (
          <div className="quiz-output error">
            Please answer all the questions
          </div>
        )}
        {playing && rightInput && (
          <div className="quiz-output success">{score}</div>
        )}
      </div>
    </section>
  );
}

export { Quiz };

/*
{radioChoices.map((choice, index) => {
            return (
              <RadioButton
                question={questions[index]}
                labelClass={questionLabelClass[index]}
                choices={choice}
              />
            );
          })}


          const RadioButton = (props) => {
  const { question, labelClass, choice } = props;
  console.log(choice);
  // const { id, value } = choice;
  return (
    <div className="question-menu">
      <label className={("label", labelClass)}>{question}</label>
      { <input type="radio" name={labelClass} id={id} value={value} key={id} />
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {value}
      </label> }
      )
      </div>
    );
  };

*/
