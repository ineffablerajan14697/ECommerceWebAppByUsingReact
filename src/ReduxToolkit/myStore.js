import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./mySlice.js"
let   storeData = configureStore({
    reducer:{
        countStore : CountSlice
    }
});
export default storeData