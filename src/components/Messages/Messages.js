import React from 'react'

import './Messages.css'

export const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map(({ timestamp, message, sender }) => { 
        return (
          <section key={timestamp}>
            <div className="messages__sender">{sender}</div>
            <div className="messages__message">{message}</div>
          </section>
        ) 
      })}
    </div>
  )
}
