import React from 'react'

import { UserInfo } from '../UserInfo/UserInfo'
import { ChatList } from '../ChatList/ChatList'
import { AddNewChat } from '../AddNewChat/AddNewChat'

import './SideBar.css'

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <UserInfo />
      </div>

      <div className="sidebar__body">
        <AddNewChat />
        <hr />
        <ChatList />
      </div>
    </div>
  )
}
