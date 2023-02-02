import React from "react";
import styles from './Steps.module.css'
const Step = (props) => {
    
    const {number,text,step}=props

  return   <div className={styles.step}>
        <div className={`${styles.stepNumber} ${step===number && styles.stepNumberHighlighted}`}>{number}</div>
        <div className={styles.stepDesc}>
            <h3>STEP {number}</h3>
            <h2 className={styles.stepExtra}>{text}</h2>
        </div>
        </div>
}
;

export default Step;
