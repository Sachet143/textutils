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

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText('new text'); // Correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mr-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
  );
}
