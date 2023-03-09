
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert,setAlert]=useState('null'); 
   const showAlert=(message,type)=>{
    setAlert({
      msg: message,    
      type1: type
    })
   }
  const toggleMode =()=>{
    if(mode === 'light'){
       setmode('dark');
       document.body.style.backgroundColor ="#042743";
       showAlert("dark mode has been enabled","success");
       document.title="TextUtills -Dark Mode Enable";
  } 
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
      document.title="TextUtills -light Mode Enable";

  }

  }
  return (
  <>
  <Router> 
<Navbar style={{ color: '#706c61' }}  mode = {mode} toggleMode={toggleMode} Titles = "TextUtils " textAbout="AboutUtils"/>
<Alert alert={alert} />
 {/* below navbar is used for default props
<Navbar /> */}
<div className="container my-3" > 
<Routes> 
   
          <Route  exact path="/About" element={   <About mode={mode} />}/>
          <Route  exact path="/" element= {<Textform showAlert={showAlert} heading="Enter the text which is to analyze " mode ={mode}/>  }/>
       
          {/* <About mode={mode} /> */}
         
           </Routes>
</div>
</Router>


 </>

  );
}

export default App;
