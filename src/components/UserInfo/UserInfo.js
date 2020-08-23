import React from 'react'

import { Avatar } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat'

import './UserInfo.css'

export const UserInfo = () => {
  return (
    <div className="userInfo">
      <Avatar src="https://avatars.dicebear.com/api/male/asian.svg" />

      <div className="userInfo__right">
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />
      </div>
    </div>
  )
}
