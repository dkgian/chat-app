import React from 'react'

import { UserInfo } from '../UserInfo/UserInfo'

import './SideBar.css'

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <UserInfo />
      </div>

      <div className="sidebar__body">body</div>
    </div>
  )
}
