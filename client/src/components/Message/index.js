import React from 'react';

function Message ({message, loading}) {
  return (
    <div className="container is-max-desktop">
      { loading ? 
        <div>Loading</div> :
        <div>{message}</div>
      }
    </div>
  )
}

export default Message;