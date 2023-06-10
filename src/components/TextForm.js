import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClrClick = () => {
    setText("");
  };

  let ele = "";
  const handleCapEachWordClick = () => {
    let txt = text.split(" ");
    for (let i = 0; i < txt.length; i++) {
      let element = txt[i].charAt(0).toUpperCase();
      element = element + txt[i].slice(1);
      ele = ele + element + " ";
    }
    setText(ele);
  };

  let sen = "";
  const handleCapEachSenClick = () => {
    let txt = text.split(". ");
    console.log(txt);
    for (let i = 0; i < txt.length; i++) {
      let element;
      if (i === 0) {
        element = txt[i].charAt(0).toUpperCase();
        element = element + txt[i].slice(1).toLowerCase();
      } else {
        element = txt[i].charAt(0).toUpperCase();
        element = element + txt[i].slice(1).toLowerCase();
      }
      console.log(element)
      if (i !== (txt.length-1)) {
        sen = sen + element + ". ";
      } else {
        sen = sen + element;
      }
      console.log(sen)
    }
    setText(sen);
    sen = "";
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText('new text'); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          onClick={handleCapEachWordClick}
        >
          Capitalize Each Word
        </button>
        <button
          className="btn btn-info mx-1 my-1"
          onClick={handleCapEachSenClick}
        >
          Sentenced Case
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClrClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
