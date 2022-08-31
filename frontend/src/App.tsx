import { useState } from 'react'
import { BrowserRouter as Routerr, Route, Link, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import { Router } from 'express';
import PostsPage from './Posts/PostsPage'


function App() {
  const [count, setCount] = useState(0)

  return (

        <Routerr>
          <h1>MyFace</h1>
          <Routes>
            <Route path="/posts"
                  element={<PostsPage/>}>
            </Route>
          </Routes>
        </Routerr>
  )
}

export default App
