import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const [graymode, setGray] = useState('light')
  const [alert, setAlert] = useState(null)

  const fixMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#000'
      document.body.style.color = 'white'
      showAlert('dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('light mode has been enabled', 'success')
    }
  }

  const fixGrayMode = () => {
    if (graymode === 'light') {
      setGray('secondary')
      document.body.style.backgroundColor = 'gray'
      showAlert('gray mode has been enabled', 'success')
    } else {
      setGray('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert('')
    }, 1500);
  }
  return (
    <>
       <Navbar mode={mode} fixMode={fixMode} graymode={graymode} fixGrayMode={fixGrayMode} showAlert={showAlert} />
            <Alert alert={alert} />
            <Routes>
              <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} heading={'Try TextUtils - Word Counter, Character Counter...'} />} />
              <Route path='/About' element={<About />} mode={mode} />
            </Routes>
    </>
  );
}

export default App;
