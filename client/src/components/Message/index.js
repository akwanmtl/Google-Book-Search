import React from 'react';
import './message.css'

function Message ({message, loading}) {
  return (
    <div className="message-banner">
      { loading ? 
        <progress class="progress is-large is-link" max="100">100%</progress> :
        <div>{message}</div>
      }
    </div>
  )
}

export default Message;