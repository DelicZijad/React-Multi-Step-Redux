import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState={
 formValid:false,
  step:1,
  billing:'monthly',
  plan:"Arcade",
  confirm:false
}

const slice=createSlice({
    name:'all',
    initialState:initialState,
    reducers:{
      formValidation (state,action) {
        state.formValid=action.payload;
      },
       increaseStep(state){
  state.step++
      },
     decreaseStep(state){
  state.step--
},
resetStep(state){
  state.step=2
},
billingHandler (state) {
 if(state.billing==='monthly') state.billing='yearly'
 else state.billing='monthly'
 },
 planHandler(state,action){
  state.plan=action.payload
 },
 setConfirm(state){
  state.confirm=true
 }

    }
})



const store=configureStore({
    reducer:slice.reducer
});



export const actions=slice.actions;
export default store;