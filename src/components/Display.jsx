import React from "react";
import { useSelector } from "react-redux";
import styles from './Display.module.css'
import Extras from "./Extras/Extras";
import Final from "./Final";
import Form from "./Form/Form";
import Plans from "./Plans/Plans";
import Summary from "./Summary";
import Header from "./utils/Header";
const Display = (props) => {
  const {addExtra,removeExtra,price,totalPrice,extras}=props
 const step = useSelector(state=>state.step)
 const confirmed = useSelector(state=>state.confirm)
  return <div className={styles.display}>
    {step===1 && 
    <>
    <Header title={'Personal Info'} txt={'Please provide your name, email address, and phone number'} />
        <Form />
        </>
        }
        {step===2 && <>
   <Header title={'Select your plan'} txt={' You have the option of monthly or yearly billing.'} />
   <Plans />
   </> } 
    {step===3 && <>
   <Header title={'Pick add-ons'} txt={' Add-ons help enhance your gaming experience.'} />
   <Extras
   addExtra={addExtra}
   removeExtra={removeExtra}
   /></> } 
   {step===4 && !confirmed && <>
   <Header title={'Finishing up'} txt={'Double-check everything looks OK before confirming.'} />
   <Summary
      price={price}
      totalPrice={totalPrice}
      extras={extras}
   /></> } 
{confirmed && <Final/>}

  </div>
}

export default Display;
