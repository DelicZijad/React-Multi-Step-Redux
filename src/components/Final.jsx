import React from "react";
import src from '../assets/icon-thank-you.svg';
import styles from './Final.module.css'
const Final = () => {
  return <section className={styles.final}>
    <div className={styles.finalImage}>
        <img src={src} alt="" />
    </div>
    <h2 >Thank You!</h2>
    <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
  </section>
};

export default Final;