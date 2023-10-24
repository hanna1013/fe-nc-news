import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import ArticleList from './components/ArticleList'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [] = useState()

  return (
    <>
     <Header/>
     <Nav/>
     <ArticleList/>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
