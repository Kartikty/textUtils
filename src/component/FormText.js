import React,{useState} from 'react'
export default function FormText(props) { 
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text)
        let newTest = text.toUpperCase();
        setText( newTest);
    }
    const handleLowClick = ()=>{
        // console.log("uppercase was clicked" + text)
        let newTest = text.toLowerCase();
        setText( newTest); 
    }
    const handleOnChange = (event)=>{
        console. log("on change ");
        setText(event.target.value)
        
    }
    const [text, setText] =useState(' ')
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <label for="box1" className="form-label"> </label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="box1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} and {text.length} characters</p>
        <p> {0.008*text.split(" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
