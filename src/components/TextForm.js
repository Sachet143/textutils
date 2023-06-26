import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClrClick = () => {
    setText("");
    props.showAlert("All text Cleared", "danger");
  };

  let ele = "";
  const handleCapEachWordClick = () => {
    let txt = text.split(" ");
    for (let i = 0; i < txt.length; i++) {
      let element = txt[i].charAt(0).toUpperCase();
      element = element + txt[i].slice(1).toLowerCase();
      ele = ele + element + " ";
    }
    setText(ele);
    props.showAlert("Each word capitalized", "success");
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
      console.log(element);
      if (i !== txt.length - 1) {
        sen = sen + element + ". ";
      } else {
        sen = sen + element;
      }
      console.log(sen);
    }
    setText(sen);
    sen = "";
    props.showAlert("Capitalized the first word of a sentence", "success");
  };

  const handleCopy = () => {
    var cpy = document.getElementById("myBox");
    cpy.select();
    navigator.clipboard.writeText(cpy.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");
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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(60 61 65)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-success mx-1 my-1"
          onClick={handleCapEachWordClick}
        >
          Capitalize Each Word
        </button>
        <button disabled={text.length===0}
          className="btn btn-info mx-1 my-1"
          onClick={handleCapEachSenClick}
        >
          Sentenced Case
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClrClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/g).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/g).filter((element) => {
              return element.length !== 0;
            }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
