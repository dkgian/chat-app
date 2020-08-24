import React from 'react'

import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './ChatWindowHeader.css'

export const ChatWindowHeader = () => {
  return (
    <div className="chatWindowHeader">
      <div className="chatWindowHeader__left">
        <Avatar />

        <div className="chatWindowHeader__roomInfo">
          <div className="chatWindowHeader__room">Room 9</div>

          <div className="chatWindowHeader__lastSeen">Last seen yesterday!</div>
        </div>
      </div>

      <div className="chatWindowHeader__right">
        <SearchIcon />
        <AttachFileIcon />
        <MoreVertIcon />
      </div>
    </div>
  )
}
