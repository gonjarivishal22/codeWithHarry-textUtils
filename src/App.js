import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is  enabled', 'success')
      document.title = 'textUtils-Dark mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is  enabled', 'success')
      document.title = 'textUtils-Light mode'

    }
  }

  const [alert, setAlert] = useState()

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" home="Home" mode={mode} toggleMode={switchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
            {/* <About /> */}
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;

