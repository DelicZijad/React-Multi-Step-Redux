import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/redux-store";
import styles from './Summary.module.css'

const Summary = (props) => {
  const dispatch=useDispatch()
     const billing = useSelector(state=>state.billing)
     const plan = useSelector(state=>state.plan)
  const {price,totalPrice,extras}=props
  const gettingPrice=value=>{
    return `$${value}/${billing==='monthly' && 'mo' ||'yr'}`
  }
  const resetStep=()=>{
    dispatch(actions.resetStep());
  }
  return <>
  <section className={styles.summary}>
    <div className={styles.summaryMain}>
      <div>
      <h2>{`${plan} (${billing})`}</h2>
      <button onClick={resetStep}>Change</button>
      </div>
      <h4>{gettingPrice(price)}</h4>
    </div>
   
    {extras.map(extra=>{
      return (
        <div key={extra.type} className={styles.summaryExtra}>
       <h2>{extra.type}</h2>
       <h3>{`+${gettingPrice(extra.price)}`}</h3>
        </div>
      )
    })}
 
  </section >
    <div className={styles.summaryTotal}>
    <h2 >{`Total (per ${billing==='monthly'&& 'month' || 'year'})`}</h2>
    <h3>{gettingPrice(totalPrice)}</h3>
  </div>
  </>;
};

export default Summary;