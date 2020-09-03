import React from 'react'

import { SideBar, ChatWindow } from './components'

import './App.css'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Route path="/:roomId">
          <ChatWindow />
        </Route>
      </div>
    </div>
  )
}

export default App
