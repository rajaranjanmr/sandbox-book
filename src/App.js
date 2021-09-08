import React, { useState } from "react";
import "./styles.css";
var bookDictionary = {
  javascript: [
    "Eloquent Script",
    "4/5",
    "You Don't Know Js",
    "3.5/5",
    "Dummy Js",
    "4/5"
  ],
  fiction: ["Shiva Triology", "5/5", "Harry potter", "4.5/5", "shadow", "3/5"],
  bussiness: [
    "Never Split the difference",
    "5/5",
    "LoonShots",
    "3.5",
    "forbes",
    "5/5"
  ]
};
export default function App() {
  const [book1, setBook1] = useState(0);
  const [rate1, setRate1] = useState(0);
  const [book2, setBook2] = useState(0);
  const [rate2, setRate2] = useState(0);
  const [book3, setBook3] = useState(0);
  const [rate3, setRate3] = useState(0);
  function jbuttonHandler(event) {
    var bookName = bookDictionary[event.target.value];
    setBook1(bookName[0]);
    setRate1(bookName[1]);
    setBook2(bookName[2]);
    setRate2(bookName[3]);
    setBook3(bookName[4]);
    setRate3(bookName[5]);
  }
  function fbuttonHandler(event) {
    var bookName = bookDictionary[event.target.value];
    setBook1(bookName[0]);
    setRate1(bookName[1]);
    setBook2(bookName[2]);
    setRate2(bookName[3]);
    setBook3(bookName[4]);
    setRate3(bookName[5]);
  }
  function bbuttonHandler(event) {
    var bookName = bookDictionary[event.target.value];
    setBook1(bookName[0]);
    setRate1(bookName[1]);
    setBook2(bookName[2]);
    setRate2(bookName[3]);
    setBook3(bookName[4]);
    setRate3(bookName[5]);
  }

  return (
    <div className="App">
      <h1>
        <span>📚</span>goodbooks
      </h1>
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        select my favourite books.select a genre to get started.
      </div>

      <button clicked="true" value="javascript" onClick={jbuttonHandler}>
        javascript
      </button>
      <button value="fiction" onClick={fbuttonHandler}>
        fiction
      </button>
      <button value="bussiness" onClick={bbuttonHandler}>
        bussiness
      </button>
      <hr style={{ marginTop: "1rem", marginBottom: "1rem", color: "black" }} />
      <div
        style={{
          textAlign: "center",
          width: "30%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "0.35rem",
          marginBottom: "1rem",
          borderRadius: "1rem"
        }}
      >
        <h3>{book1}</h3>
        <h7>{rate1}</h7>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "30%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "0.4rem",
          marginBottom: "1rem",
          borderRadius: "1rem"
        }}
      >
        <h3>{book2}</h3>
        <h7>{rate2}</h7>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "30%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "0.4rem",
          marginBottom: "1rem",
          borderRadius: "1rem"
        }}
      >
        <h3>{book3}</h3>
        <h7>{rate3}</h7>
      </div>
    </div>
  );
}
