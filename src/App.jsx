import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import ArticleList from './components/ArticleList'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import IndividualArticle from './components/IndividualArticle'
import { UserContext } from './components/User'


function App() {

  const [user, setUser] = useState("tickle122");

  return (
    <UserContext.Provider value={{ user, setUser}}>
    <div>
     <Header/>
     <Nav/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticleList/>} />
      <Route path="/articles/:article_id" element={<IndividualArticle user={user}/>} />
      {/* { <Route path="/articles/:article_id" element={<CommentList />}/> } */}
     </Routes>
    </div>
    </UserContext.Provider>
  )
}

export default App
