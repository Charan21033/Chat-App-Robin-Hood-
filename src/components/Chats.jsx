import React from 'react'

const Chats = () => {
  return (
    <div className='chats' > 
   
  {[1,1,1,1,].map(()=> <div className='userChat' >  
        <img src='https://www.bing.com/th?id=OIP.Q4KC6a1IxOLq_NdUxF4AeQHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
        <div className='userChatInfo' >  
            <span>Jane</span>
            <p>Hello</p>
        </div>
         </div> )}
    


    </div>
  )
}

export default Chats