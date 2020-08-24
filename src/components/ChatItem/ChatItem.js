import React from 'react'

import { Avatar } from '@material-ui/core'

import './ChatItem.css'

export const ChatItem = ({ room }) => {
  return (
    <div className="chatItem">
      <div className="chatItem__avatar">
        <Avatar />
      </div>
      <div className="chatItem__content">
        <div className="chatItem__room">{room.name}</div>
        <div className="chatItem__last">This is last msg</div>
      </div>
    </div>
  )
}
