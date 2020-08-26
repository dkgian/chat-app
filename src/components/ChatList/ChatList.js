import React, { useEffect, useState } from 'react'

import db from '../../firebase'
import { ChatItem } from '../ChatItem/ChatItem'
import './ChatList.css'

export const ChatList = () => {
  const [rooms, setRooms] = useState([])

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
      {rooms.map(({ id, room }) => (
        <ChatItem key={id} room={room} id={id} />
      ))}
    </div>
  )
}
