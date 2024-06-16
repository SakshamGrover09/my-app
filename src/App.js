import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
      
    }, 2000);
  }
  

  const togglemode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is turned On","success");
      document.title='TextUtils-Light Mode';
  
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#333333';
      showAlert("Dark Mode is turned On","success");
      document.title='TextUtils-Dark Mode';
    }

  }
  return (
    <>
    <BrowserRouter> 
    <Navbar title="About" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    

     <Routes>
            <Route exact  path="/About" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/TextForm" element={<TextForm heading="Enter text to Analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> 


       
      
      
    </div>
    </BrowserRouter>
  
    </>
  );
}

export default App;
