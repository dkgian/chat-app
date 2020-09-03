import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { useParams } from 'react-router-dom'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { Input } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import { ChatWindowHeader } from '../ChatWindowHeader/ChatWindowHeader'
import { Messages } from '../Messages/Messages'

import './ChatWindow.css'
import db from '../../firebase'

export const ChatWindow = () => {
  const [input, setInput] = useState('')
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState([])

  const { roomId } = useParams()

  const updateInputField = () => (e) => setInput(e.target.value)

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name))

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        )
    }
  }, [roomId])

  const sendMessage = () => (e) => {
    e.preventDefault()

    const newMessage = {
      message: input,
      sender: 'sample man',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }

    db.collection('rooms').doc(roomId).collection('messages').add(newMessage)

    setInput('')
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <ChatWindowHeader roomName={roomName} />
      </div>

      <div className="chatWindow__body">
        <Messages messages={messages} />
      </div>

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
