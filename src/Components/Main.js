import React, { useState } from "react";
export default function Main(props) {
  // Converting text to Upper Case
  function ToUpperCase() {
    let converting = text.toUpperCase();
    settext(converting);
    props.showalert("Converted to Upper Case", "Success");
  }
  // Converting text to Lower Case
  function ToLowerCase() {
    let converting = text.toLowerCase();
    settext(converting);
    props.showalert("Converted to Lower Case", "Success");
  }
  function Changetext(e) {
    settext(e.target.value);
  }
  // Making the first letter capital
  function Sentencecase() {
    let sentencecase = text[0].toUpperCase() + text.slice(1);
    settext(sentencecase);
    props.showalert("Converted to Sentence Case", "Success");
  }
  // Clear the Text Area
  function Cleartext() {
    settext("");
    props.showalert("Text area have been cleared", "Success");
  }
  // Copy Text****
  function CopyText() {
    let text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text copied to Clipboard", "Success");
  }
  let [text, settext] = useState("");
  // Not adding empty spaces***
  let wordscount = text.split(/\s/);
  let wordLenght = wordscount.filter((removespaces) => {
    return removespaces.trim() !== "";
  });

  return (
    <div className="container">
      <div className="mt-4">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={`form-label text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Enter text:
        </label>
        <textarea
          placeholder="Enter text here"
          value={text}
          onChange={Changetext}
          className={`form-control text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          id="textbox"
          rows="8"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } mt-3 mx-1`}
        onClick={ToUpperCase}
      >
        To Upper Case
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } mt-3 mx-1`}
        onClick={ToLowerCase}
      >
        To Lower Case
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } mt-3 mx-1`}
        onClick={Cleartext}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } mt-3 mx-1`}
        onClick={Sentencecase}
      >
        Sentence Case
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } mt-3 mx-1`}
        onClick={CopyText}
      >
        Copy Text
      </button>
      <div className="my-3">
        <h6
          className={`form-label text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          {text.length} Characters and {wordLenght.length} words
        </h6>
        <h4
          className={`form-label text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Preview
        </h4>
        <h6
          className={`form-label text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          {text.length > 0 ? text : "Add something in Textarea to Preview"}
        </h6>
      </div>
    </div>
  );
}
