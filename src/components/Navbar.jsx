import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
   <span className='logo' >Robin Hood</span>
   <div className='user' > 
    <img src='https://www.bing.com/th?id=OIP.Q4KC6a1IxOLq_NdUxF4AeQHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
    <span  >John</span>
    <button>logout</button>
     </div>
    </div>
  )
}

export default Navbar