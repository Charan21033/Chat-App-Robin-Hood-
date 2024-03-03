import React from 'react'

const Search = () => {
  return (
    <div className='search' >
        <div className='searchForm' > 
        <input type='text' placeholder='Find a user' />
         </div>
         <div className='userChat' >  
        <img src='https://www.bing.com/th?id=OIP.Q4KC6a1IxOLq_NdUxF4AeQHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
        <div className='userChatInfo' >  
            <span>Jane</span>
        </div>
         </div>
         </div>
  )
}

export default Search