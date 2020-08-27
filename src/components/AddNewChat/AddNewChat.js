import React from 'react'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import db from '../../firebase'
import './AddNewChat.css'

const addNewChat = () => {
  return () => {
    const newRoom = prompt('Add a new chat')
    if (newRoom) {
      db.collection('rooms').add({
        name: newRoom
      })
    }
    return
  }
}

export const AddNewChat = () => {
  return (
    <div className="addNewChat">
      <Button onClick={addNewChat()}>
        <AddIcon />
        Add a new chat
      </Button>
    </div>
  )
}
