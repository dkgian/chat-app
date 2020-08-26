import React from 'react'

import { Avatar } from '@material-ui/core'

import './ChatItem.css'
import { Link } from 'react-router-dom'

export const ChatItem = ({ room, id }) => {
  return (
    <div className="chatItem">
      <Link to={`/${id}`}>
        {/* <div className="chatItem__avatar"> */}
          <Avatar />
        {/* </div> */}
        <div className="chatItem__content">
          <div className="chatItem__room">{room.name}</div>
          <div className="chatItem__last">{id}</div>
        </div>
      </Link>
    </div>
  )
}
