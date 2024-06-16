import React,{useState} from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

export default function About(props) {

  let mystyle={
    color:props.mode==='light'?'black':'white',
    backgroundColor:props.mode==='light'?'white':'#333333',
    border:'1px solid'
  }

   
    
  return (
    <div className="container"  >
      <div className={`text-${props.mode==='light'?'dark':'light'}`}> 
    
      <h1> About Us  </h1> </div>
      
        <div className="accordion" id="accordionExample style={mystyle}">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About TextUtils</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Textutils is a user-friendly website that converts text to uppercase and lowercase instantly. It features an intuitive interface, making it accessible to users of all levels. The service is free, allowing easy access to text conversion tools without cost. Additionally, Textutils may offer other utilities like trimming whitespace and counting characters or words.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>How to Use?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        
To use Textutils, simply visit the website and enter your text in the provided input box. Choose the desired conversion option, such as "uppercase" or "lowercase," and click the corresponding button. Instantly, the converted text will appear, ready for you to copy and use.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>About React</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
  
React is a popular JavaScript library developed by Facebook for building dynamic user interfaces, particularly single-page applications. It allows developers to create reusable UI components, making code more modular and maintainable. React uses a virtual DOM to optimize rendering and improve performance. Its declarative approach simplifies the process of designing interactive UIs. Additionally, React's robust ecosystem and strong community support provide numerous tools and libraries to enhance development.
      </div>
    </div>
  </div>
</div>
  
    </div>
  )
}
