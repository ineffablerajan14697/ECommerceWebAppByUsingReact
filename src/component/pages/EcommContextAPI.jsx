import { createContext, useState } from "react";

export let MyContext = createContext()

function MyContextApi ({children}){
    
    let [value, updateValue] = useState(0);     // Global state

    return (<MyContext.Provider value = {{value,updateValue}}>
        {children}
    </MyContext.Provider>)
}
export {MyContextApi} ;