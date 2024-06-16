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
    
      let ns=text.toLowerCase();
      setText(ns);
      props.showAlert("Converted to Lower Case","success");
      
    }
    const handleOnnClick=()=>{
      console.log("Clicked!!")
      
      setText("");
      props.showAlert("Cleared Text","success");
      
    }
    

  return (
    <>
    <div className="mb-3">
        
     <div className={`text-${props.mode==='light'?'dark':'light'}`}>
     <h1>{props.heading}</h1>
     </div>
   
  <textarea className="form-control" style={{backgroundColor:'#D3D3D3'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
 
  </div>
  <button disabled={text.length===0} className="btn btn-secondary " onClick={handleOnClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleOnoClick}>Convert to Lower case</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleOnnClick}>Clear Text</button>

  
    <div className={`container  my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h2> Preview Summary</h2>
      <p>
        {text.split(/\s+/).filter((a)=>{return a.length!==0}).length} Words
      </p>

    </div>
  
  


   
    </>
  )
}
