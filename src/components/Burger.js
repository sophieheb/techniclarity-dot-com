import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/burger.module.css';

function Burger({ collapsed, setCollapsed }) {
  return (
    <button
      className="button shadow-none"
      onClick={() => { setCollapsed(); }}
      type="button"
    >
      <span
        className={`${collapsed ? styles.bun : styles.topBun} ${styles.allBuns} bg-blue`}
      />
      <span
        className={`${collapsed ? styles.bun : styles.bottomBun} ${styles.allBuns} bg-blue`}
      />
    </button>
  );
}

Burger.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default Burger;
