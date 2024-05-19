import React ,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState("Enter Here");
    const handleOnChange=(event)=>{
      console.log("Changed")
      setText(event.target.value);
    }
    const handleOnClick=()=>{
      console.log("Clicked!!")
      let ns=text.toUpperCase();
      setText(ns);
      props.showAlert("Converted to Upper Case","success");
      
    }
    const handleOnoClick=()=>{
      console.log("Clicked!!")
      let old=text;
      let ns=text.toUpperCase();
      setText(ns);
      
    }
    const handleOnnClick=()=>{
      console.log("Clicked!!")
      let ns=text.toUpperCase();
      setText(ns);
      
    }
    

  return (
    <>
    <div className="mb-3">
        

    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
 
  </div>
  <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleOnoClick}>Show old</button>
  <button className="btn btn-primary mx-2" onClick={handleOnnClick}>Show New</button>
  


   
    </>
  )
}
