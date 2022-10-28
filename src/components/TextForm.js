import React, { useState } from "react";
export default function TextForm(props) {
  const handleupclick = ()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showalert('Converted to Uppercase','success')
  }
  const handlelowclick = ()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showalert('Converted to Lowercase','success')
  }
  const handleonchange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleonchange}
          style={{backgroundColor:props.mode==='dark'?'#343a38':'white',color: props.mode==='dark'?'white':'black' }}
          value={text}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn m-2 btn-warning" onChange={handleonchange} onClick={handleupclick}>
        Convert To upperCase
      </button>
      <button className="btn m-2 btn-primary" onChange={handleonchange} onClick={handlelowclick}>
        Convert To lowerCase
      </button>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split("").length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
      </div>
    </>
  );
}
