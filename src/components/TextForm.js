import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick = () => {
    setText(text.toUpperCase());
}

const handleLowClick = () => {
    setText(text.toLowerCase());
}

const handleOnChange = (event) => {
    setText(event.target.value);
}

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText('new text'); // Correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter your text here"
        ></textarea>
      </div>
      <button className="btn btn-primary mr-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
