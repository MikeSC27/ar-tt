import React from 'react'
import './index.css'
import Home from './routes/Home';
import Main from './routes/Main';
import SingleCube from './routes/SingleCube';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlecube' element={<SingleCube />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path='/singlecube' element={<SingleCube />} />
      //   <Route path='/main' element={<Main />} />
      //   <Route path="/uverse" element={<Uverse />} />
      // </Routes>

    // <div>
    //   <Main />
    //   <SingleCube />
    // </div>
  )
};


export default App
