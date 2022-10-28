import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>{
    setAlert(
      {
        msg: message,
        type:type,
      }
    )
    setTimeout(() => {
      setAlert();
    }, 1000);
  }
  const togglemode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      showalert('Dark mode has been enabled','success')
    } else {
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('Light mode has been enabled','success')

    }
  }
  return (
    <> 
    <Navbar title='Texthelper' mode={mode} togglemode={togglemode}/>
    <Alert alert= {alert}/>
{/* <Router>
<Navbar title='Texthelper' mode={mode} togglemode={togglemode}/>
<Alert alert= {alert}/> */}
<div className="container m-3">
<TextForm showalert={showalert} heading='Convert Your Text' mode={mode}/>
{/* <Routes>
          <Route exact path="/" element={<TextForm showalert={showalert} heading='Convert Your Text' mode={mode}/>}/>
          <Route exact path="/About" element={<About/>}/>
</Routes> */}
{/* <About/> */}
</div>
{/* </Router> */}

  </>
  );
}

export default App;
