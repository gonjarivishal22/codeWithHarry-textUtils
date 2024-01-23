import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    // removeBodyClasses()
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is  enabled', 'success')
      // document.title = 'textUtils-Dark mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is  enabled', 'success')
      // document.title = 'textUtils-Light mode'

    }
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  // }

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
        <Navbar title="TextUtils" about="About Us" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Try TextUtils-Word counter,Character counter,Remove extra spaces" mode={mode} showAlert={showAlert} />} />

          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;

