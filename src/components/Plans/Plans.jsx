import React from "react";
import Plan from "./Plan";
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/redux-store";
import styles from './Plans.module.css'
const Plans = (props) => {
  const dispatch=useDispatch()
 const billing=useSelector(state=>state.billing);
 const billingHandler=()=>{
dispatch(actions.billingHandler())
 }
  return <section className={styles.plans}>
    <div className={styles.plansWrapper}>
    <Plan
    src={arcade} 
    type={'Arcade'}
    />
    <Plan src={advanced}
    type={'Advanced'}
     />
    <Plan src={pro}
    type={'Pro'}
     />
    </div>
  <div className={`${styles.plansModes} ${billing==='monthly' && styles.plansModesMonthly || styles.plansModesYearly}` }>
   <h4>Monthly</h4>
   <button
   onClick={billingHandler}
    className={`${styles.plansToggle} ${billing==='yearly' && styles.plansToggleYearly}` }>
     <div></div>
   </button>
   <h5>Yearly</h5>
  </div>
  </section>
};

export default Plans;