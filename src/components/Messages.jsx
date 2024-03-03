import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='messages' >
   {[1,1,1,1,1,1,1,1].map(()=><Message/> )  }

    </div>
  )
}

export default Messages