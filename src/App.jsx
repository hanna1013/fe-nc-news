import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import ArticleList from './components/ArticleList'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle'

function App() {
  const [] = useState()

  return (
    <>
     <Header/>
     <Nav/>
     <ArticleList/>
     <IndividualArticle/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/articles' element={<ArticleList/>}/>
     </Routes>
    </>
  )
}

export default App
