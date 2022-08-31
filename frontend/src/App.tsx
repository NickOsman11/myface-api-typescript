import { useState } from 'react'
import { BrowserRouter as Routerr, Route, Link, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import { Router } from 'express';
import PostsPage from './AppComponent/PostsPage'
import UserPage from './AppComponent/UserPage'
import CreateUserPage from './AppComponent/CreateUserPage';


function App() {
  const [count, setCount] = useState(0)
  
  return (

        <Routerr>
          <h1>MyFace</h1>
          <Routes>
            <Route path="/posts"
                  element={<PostsPage />}>
            </Route>
            <Route path="/users/:userID"
                  element={<UserPage />}>
            </Route>
            <Route path="/users/create"
                  element={<CreateUserPage />}>
            </Route>
            
          </Routes>
        </Routerr>
  )
}

export default App
