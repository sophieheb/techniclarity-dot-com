import React from 'react';
import styles from'../styles/burger.module.css'

function Burger({collapsed, setCollapsed}) {

  return (
    <button 
      className={"button shadow-none"} 
      onClick={()=>{setCollapsed()}}>
        <span 
          className={`${collapsed ? styles.bun : styles.topBun} ${styles.allBuns} bg-blue`} />
        <span 
          className={`${collapsed ? styles.bun : styles.bottomBun} ${styles.allBuns} bg-blue`} />
    </button>
  )
}

export default Burger;
