import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Router } from "./Router.jsx"
import {MyContextApi} from "./component/pages/EcommContextAPI.jsx"
import Home from "./ReduxToolkit/home.jsx"
import { Provider } from 'react-redux'
import storeData from './ReduxToolkit/myStore.js'





createRoot(document.getElementById('root')).render(
  <>
    
    
    {/* <MyContextApi>
      <Router/>
    </MyContextApi> */}
< Provider store = {storeData}>
<Home/>
</Provider>
    
    
    
    
    
    
    
  </>






)
