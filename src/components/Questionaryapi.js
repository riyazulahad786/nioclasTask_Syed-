import React from "react";
import { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import axios from "axios";
export default function Questionaryapi() {
  const id_1 = "AreaUnderTheCurve_901";
  const id_2 = "BinomialTheorem_901";
  const id_3 = "DifferentialCalculus2_901";
  const [questions, setQuestions] = useState([]);
  const [state, setState] = useState(id_1);
  const [number, setNumber] = useState(0);
  const fetchData = async () => {
    const response = await fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
    );
    const data = await response.json();
    console.log(data);
    setQuestions(data[0].Question);
  };

  //id
  //AreaUnderTheCurve_901
  // BinomialTheorem_901
  // DifferentialCalculus2_901

  //inject dependency to avoid rerender
  var id;
  if (number === 0) {
    id = id_1;
  } else if (number === 1) {
    id = id_2;
  } else if (number === 2) {
    id = id_3;
  }
  console.log(number);
  useEffect(() => {
    fetchData();
  }, [number]);
  return (
    <div className="container">
      {/* <p>   Question : 1  {questions}</p> */}
      <MathJaxContext>
        <h2>React Questionary app </h2>
        <br />
        <MathJax> Question : {questions}</MathJax>
        <div className="d-flex justify-content-between  my-3">
          <button
            disabled={number <= 0}
            type="button"
            class="btn btn-info"
            onClick={() => {
              setNumber((pre) => pre - 1);
            }}
          >
            prev
          </button>
          <button
            disabled={number >= 2}
            type="button"
            class="btn btn-success"
            onClick={() => {
              setNumber((pre) => pre + 1);
            }}
          >
            Next
          </button>
        </div>
      </MathJaxContext>
    </div>
  );
}
