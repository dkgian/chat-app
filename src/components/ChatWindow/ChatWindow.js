import React from 'react'

import { ChatWindowHeader } from '../ChatWindowHeader/ChatWindowHeader'

import './ChatWindow.css'

export const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <ChatWindowHeader />
      </div>
      <div className="chatWindow__body">body</div>
      <div className="chatWindow__footer">footer</div>
    </div>
  )
}
