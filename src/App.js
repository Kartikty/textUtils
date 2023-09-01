   
import './App.css';

import Navbar from './component/Navbar';
 import FormText from './component/FormText';
// import About from './component/About';
import { useState } from 'react';



function App() {
  const [mode , setmode] =useState(false);
  const  toggleMode =()=>{
    if(mode === "light"){
     setmode('dark');
     document.body.style.backgroundColor ='grey';
     
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
     
    }
  }
  return (
   
   <>

  <Navbar mode={mode} toggleMode ={toggleMode}/>
  <div className="container my-3" >
  {/* <About mode={mode} />  */}
  <FormText  heading="Enter the Text to analyze"/>
  </div>
   
   </>
  );
} 

export default App;
