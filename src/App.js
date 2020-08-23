import React from 'react'

import { SideBar, ChatWindow } from './components'

import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
