import React, { useState } from 'react'

import { ChatWindowHeader } from '../ChatWindowHeader/ChatWindowHeader'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { Input } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import './ChatWindow.css'

export const ChatWindow = () => {
  const [input, setInput] = useState('')

  const updateInputField = () => (e) => setInput(e.target.value)

  const sendMessage = () => (e) => {
    e.preventDefault()
    console.log(input)
    setInput('')
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <ChatWindowHeader />
      </div>

      <div className="chatWindow__body">body</div>

      <div className="chatWindow__footer">
        <IconButton size="small">
          <InsertEmoticonIcon fontSize="inherit" />
        </IconButton>
        <form onSubmit={sendMessage()}>
          <Input value={input} onChange={updateInputField()} />
          <IconButton type="submit" size="small" disabled={!input}>
            <SendIcon fontSize="inherit" />
          </IconButton>
        </form>

        <IconButton size="small">
          <MicIcon />
        </IconButton>
      </div>
    </div>
  )
}
