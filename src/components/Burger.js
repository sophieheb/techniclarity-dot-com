import React from 'react';
import '../styles/Burger.css'

function Burger({collapsed, setCollapsed}) {

  return (
    <button 
      className={"button shadow-none"} 
      onClick={()=>{setCollapsed()}}>
        <span 
          className={`${collapsed ? 'bun' : 'topBun'} bg-blue`} />
        <span 
          className={`${collapsed ? 'bun' : 'bottomBun'} bg-blue`}  />
    </button>
  )
}

export default Burger;
