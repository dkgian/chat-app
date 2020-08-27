import React, { useEffect, useState } from 'react'
import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'

import db from '../../firebase'
import { ChatItem } from '../ChatItem/ChatItem'
import './ChatList.css'

export const ChatList = () => {
  const [rooms, setRooms] = useState([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) => {
      return setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          room: doc.data()
        }))
      )
    })
  }, [])

  return (
    <div>
      <div className="search">
        <SearchIcon />
        <Input placeholder="Search..." onChange={(e) => setSearchKey(e.target.value)} />
      </div>
      {rooms
        .filter(({ room: { name } }) => name.includes(searchKey))
        .map(({ id, room }) => (
          <ChatItem key={id} room={room} id={id} />
        ))}
    </div>
  )
}
