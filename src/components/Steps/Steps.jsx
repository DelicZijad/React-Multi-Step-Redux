import React,{useState} from "react";
import Step from "./Step";
import styles from './Steps.module.css'
 const helperArray=[{
    id:1,
    text:"YOUR INFO"
 },
 {
id:2,
text:"SELECT PLAN"
 },{
    id:3,
    text:"ADD-ONS"
 },{
      id:4,
    text:"SUMMARY"
 }]
const Steps = (props) => {

  return <section className={styles.steps}>
{helperArray.map((item)=>(
    <Step 
    step={props.step}
    key={item.id}
    number={item.id}
    text={item.text}
    />
))}

  </section>;
};

export default Steps;