import React from 'react'

import './Messages.css'

const Message = () => {
  return <div className="message"> <p>This is a message</p></div>
}

export const Messages = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  )
}
