import React from "react";
import styles from '../Display.module.css'
const Header = (props) => {
    const {title,txt}=props
  return <div className={styles.displayHeader}>
    <h1>{title}</h1>
    <h2 >{txt}</h2>
  </div>;
};

export default Header;