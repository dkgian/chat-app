import React from 'react'

import { Avatar } from '@material-ui/core'

import './ChatItem.css'

export const ChatItem = () => {
  return (
    <div className="chatItem">
      <div className="chatItem__avatar">
        <Avatar />
      </div>
      <div className="chatItem__content">
        <div className="chatItem__room">Room 9</div>
        <div className="chatItem__last">qweqweqwe</div>
      </div>
    </div>
  )
}
