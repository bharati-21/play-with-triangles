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

// const attemptedAnswers = [];

function TriangleQuiz() {
  const [playing, setPlaying] = useState(false);
  const [rightInput, setRightInput] = useState(true);
  const [displayButton, setDisplayButton] = useState(true);
  const [score, setScore] = useState(0);
  const [attemptedAnswers, setAttemptedAnswers] = useState(new Array(10));
  const [questionId, setQuestionId] = useState(new Array(10));

  const [state, setState] = useState({});

  function resetState(e) {
    setState({});
    setScore(0);
    setDisplayButton(true);
    setPlaying(false);
    setRightInput("");
    setAttemptedAnswers(new Array(10));
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((button) => {
      button.checked = false;
    });

    for (let i = 0; i < questionId.length; i++) {
      document.querySelector(
        `.question-menu:nth-child(${i + 1}`
      ).style.backgroundColor = "transparent";
    }

    setQuestionId(new Array(10));
  }

  function getSizeOfAnswers() {
    let size = 0;
    for (let key in state) {
      size++;
    }
    return size;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    const size = getSizeOfAnswers();
    console.log(size);
    if (size !== answers.length) {
      setPlaying(true);
      setRightInput(false);
    } else {
      setPlaying(true);
      setRightInput(true);
      setDisplayButton(false);

      console.log(attemptedAnswers, answers);

      let score = 0;
      for (let i = 0; i < answers.length; i++) {
        console.log(answers[i], attemptedAnswers[i]);
        if (answers[i] === attemptedAnswers[i]) {
          // document.getElementById(answerKeys[i]).style.background = "green";
          score++;
          console.log(score);
          document.querySelector(
            `.question-menu:nth-child(${i + 1}`
          ).style.backgroundColor = "lightgreen";
        } else {
          document.querySelector(
            `.question-menu:nth-child(${i + 1}`
          ).style.backgroundColor = "#F08080";
        }
      }
      setScore(score);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    const index = Number.parseInt(e.target.className);
    const name = e.target.name;

    let items = [...attemptedAnswers];
    items[index - 1] = value;
    setAttemptedAnswers(items);

    let names = [...questionId];
    names[index - 1] = name;
    setQuestionId(names);

    let currState = state;
    currState[e.target.name] = value;
    setState(currState);
    console.log(attemptedAnswers);

    console.log(questionId);
  }

  return (
    <section className="triangle-quiz-section section">
      <h2 className="section-head">
        Choose the correct answer for the questions below
      </h2>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <ol>
            {/* Question one */}
            <div className="question-menu">
              <li>
                <label className="question-label questionOne">
                  A triangle has angles: 45<sup>0</sup>, 45<sup>0</sup> and 90
                  <sup>0</sup>. Is this a right angled triangle?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionOne"
                  id="questionOneYes"
                  className="1"
                  value="yes"
                  onChange={(e) => handleChange(e)}
                  // checked={state.questionOne === "yes"}
                />
                <label for="questionOneYes" className="question-option">
                  Yes
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionOne"
                  id="questionOneNo"
                  value="no"
                  className="1"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionOneNo" className="question-option">
                  No
                </label>
              </div>
            </div>

            {/* Question Two */}
            <div className="question-menu">
              <li>
                <label className="question-label questionTwo">
                  A triangle has angles: 136<sup>0</sup>, 24<sup>0</sup> and 20
                  <sup>0</sup>. Is this an obtuse angled triangle?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTwo"
                  id="questionTwoYes"
                  value="yes"
                  className="2"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTwoYes" className="question-option">
                  Yes
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTwo"
                  id="questionTwoNo"
                  value="no"
                  className="2"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTwoNo" className="question-option">
                  No
                </label>
              </div>
            </div>

            {/* Question Three */}
            <div className="question-menu">
              <li>
                <label className="question-label questionThree">
                  A triangle has angles: 70<sup>0</sup>, 50<sup>0</sup> and 60
                  <sup>0</sup>. Is this an obtuse angled triangle?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionThree"
                  id="questionThreeYes"
                  value="yes"
                  className="3"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionThreeYes" className="question-option">
                  Yes
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionThree"
                  id="questionThreeNo"
                  value="no"
                  className="3"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionThreeNo" className="question-option">
                  No
                </label>
              </div>
            </div>

            {/* Question Four */}
            <div className="question-menu">
              <li>
                <label className="question-label questionFour">
                  A triangle has 2 sides with length: 16, and one side 12. What
                  kind of a triangle is this?
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourEq"
                  value="equilateral"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourEq" className="question-option">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourSc"
                  value="scalene"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourSc" className="question-option">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourIs"
                  value="isosceles"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourIs" className="question-option">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Five */}
            <div className="question-menu">
              <li>
                <label className="question-label questionFive">
                  A triangle has all a length of 5 in all three. What kind of a
                  triangle is this?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveEq"
                  value="equilateral"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveEq" className="question-option">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveSc"
                  value="scalene"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveSc" className="question-option">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveIs"
                  value="isosceles"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveIs" className="question-option">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Six */}
            <div className="question-menu">
              <li>
                <label className="question-label questionSix">
                  A triangle sides with length: 35, 46 and 44. What kind of a
                  triangle is this?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSix"
                  id="questionSixEq"
                  value="equilateral"
                  className="6"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSixEq" className="question-option">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSix"
                  id="questionSixIs"
                  value="isosceles"
                  className="6"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSixIs" className="question-option">
                  Isosceles
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSix"
                  id="questionSixSc"
                  value="scalene"
                  className="6"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSixSc" className="question-option">
                  Scalene
                </label>
              </div>
            </div>

            {/* Question Seven */}
            <div className="question-menu">
              <li>
                <label className="question-label questionSeven">
                  A triangle has angles: 45<sup>0</sup>, 45<sup>0</sup> and 90
                  <sup>0</sup>. Choose the type of triangle.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSeven"
                  id="questionSevenEq"
                  value="equilateral"
                  className="7"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSevenEq" className="question-option">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSeven"
                  id="questionSevenSc"
                  value="scalene"
                  className="7"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSevenSc" className="question-option">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionSeven"
                  id="questionSevenIs"
                  value="isosceles"
                  className="7"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionSevenIs" className="question-option">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Eight */}
            <div className="question-menu">
              <li>
                <label className="question-label questionEight">
                  A triangle has angles: 60<sup>0</sup>, 60<sup>0</sup> and 60
                  <sup>0</sup>. Choose the type of triangle.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionEight"
                  id="questionEightEq"
                  value="equilateral"
                  className="8"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionEightEq" className="question-option">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionEight"
                  id="questionEightSc"
                  value="scalene"
                  className="8"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionEightSc" className="question-option">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionEight"
                  id="questionEightIs"
                  value="isosceles"
                  className="8"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionEightIs" className="question-option">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Nine */}
            <div className="question-menu">
              <li>
                <label className="question-label questionEight">
                  A triangle has angles: 120<sup>0</sup>, 20<sup>0</sup> and 40
                  <sup>0</sup>. Choose the type of triangle.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionNine"
                  id="questionNineEq"
                  value="equiangular"
                  className="9"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionNineEq" className="question-option">
                  Equiangular
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionNine"
                  id="questionNineAc"
                  value="acute"
                  className="9"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionNineAc" className="question-option">
                  Acute
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionNine"
                  id="questionNineOb"
                  value="obtuse"
                  className="9"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionNineOb" className="question-option">
                  Obtuse
                </label>
              </div>
            </div>

            {/* Question Ten */}
            <div className="question-menu">
              <li>
                <label className="question-label questionTen">
                  A triangle has a perimeter of 45. What is the length of one
                  side?
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTen"
                  id="questionTenVal1"
                  value="9"
                  className="10"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTenVal1" className="question-option">
                  9
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTen"
                  id="questionTenVal2"
                  value="15"
                  className="10"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTenVal2" className="question-option">
                  15
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTen"
                  id="questionTenVal3"
                  value="3"
                  className="10"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTenVal3" className="question-option">
                  3
                </label>
              </div>
            </div>

            {displayButton && (
              <input
                type="submit"
                className="btn-calculate"
                value="Calculate Score"
                onChange={(e) => handleChange(e)}
              />
            )}
            {!displayButton && (
              <input
                type="reset"
                className="btn-reset"
                value="Take Quiz Again"
                onClick={resetState}
              />
            )}
          </ol>
        </form>
        {playing && !rightInput && (
          <div className="quiz-output error">
            Please answer all the questions
          </div>
        )}
        {playing && rightInput && (
          <div className="quiz-output success">
            SCORE: <span className="quiz-score">{score}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export { TriangleQuiz };
