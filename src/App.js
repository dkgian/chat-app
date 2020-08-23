import React from 'react'

import { SideBar, ChatWindow } from './components'

import './App.css'

function App() {
  return (
    <div className="app">
      <h4>Chat room</h4>
      <div className="app__body">
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
