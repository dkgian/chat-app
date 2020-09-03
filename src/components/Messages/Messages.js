import React from 'react'

import './Messages.css'

export const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map(({ timestamp, message }) => { 
        return (
          <section key={timestamp}>
            <div className="message">{message}</div>
          </section>
        ) 
      })}
    </div>
  )
}
