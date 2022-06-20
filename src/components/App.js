
import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React, {useState} from 'react';
function App() {
  const [ mode , setMode]= useState( 'dark' );
  const toggleMode=()=>{
      if(mode===' light '){
        setMode('dark');
      }
      else{
        setMode('light');
      }
  }
  return (
    <>
  {/*<Navbar title = "TEXTUTILS"  mode ={mode} aboutText=" About Textutils" /> */}
<Navbar title = "TEXTUTILS"  mode ={mode} toggleMode= {toggleMode} />
<div className="container my-3">

<Textform heading ="Enter the text here"/>

</div>
    </>
  );
}

export default App;
