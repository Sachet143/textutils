// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  const myStyle = {
    color: props.mode === "dark" ? "#fff" : "#333",
    backgroundColor: props.mode === "dark" ? "#333" : "#fff",
    border: '2px solid',
    borderColor: props.mode === 'dark' ? '#333' : '#fff'
  };

  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "#fff" : "#333"}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Textutils</strong> gives you a way to analyze your text
                quickly and efficiently. Be it wordcount, character count or
                many more.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Textutils</strong> is a free character counter tool that
                provides instant character count & word count statistics for a
                given text. <strong>Textutils</strong> reports the number of
                words and characters. thus it is suitable for writing text with
                word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Micrsoft Edge, Safari, Opera and many more. It
                suits to count characters in facebook, blog, books, excel,
                document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          {/* <button
            onClick={toggleStyle}
            type="button"
            className="btn btn-primary"
          >
            {btnText}
          </button> */}
        </div>
      </div>
    </>
  );
}
