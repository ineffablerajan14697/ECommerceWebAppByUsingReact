import {createSlice} from "@reduxjs/toolkit";


 export const CountSlice  = createSlice({
    name : "counter",
    initialState:{
        stateValue :0
    },
    reducers:{
        increament : (state) =>{
            console.log(state);
            state.stateValue+=1;
        }
    }
 });
 export const {increament} =  CountSlice.actions;
 export default  CountSlice.reducer
 