import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import React from 'react'
import Movies from './pages/Movies'
import Browse from './pages/Browse'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Genre" element={<Genre/>}/>
        <Route path="/Browse" element={<Browse/>}/>
        <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </>
  )
}

export default App
