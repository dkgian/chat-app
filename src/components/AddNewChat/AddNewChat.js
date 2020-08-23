import React from 'react'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import './AddNewChat.css'

export const AddNewChat = () => {
  return (
    <div className="addNewChat">
      <Button onClick={() => prompt('Add a new chat')}>
        <AddIcon />
        Add a new chat
      </Button>
    </div>
  )
}
