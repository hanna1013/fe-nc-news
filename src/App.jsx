import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import ArticleList from './components/ArticleList'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle'
import Vote from './components/Vote'

function App() {
  

  return (
    <>
     <Header/>
     <Nav/>
     <Vote/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticleList/>} />
      <Route path="/articles/:article_id" element={<IndividualArticle/>} />
     </Routes>
    </>
  )
}

export default App
