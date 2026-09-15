
import { HashRouter, Routes, Route } from "react-router-dom";

import {Home} from "./component/pages/Home.jsx"
import { About } from "./component/pages/About.jsx";  
import { Products } from "./component/pages/Products.jsx";  
import { Error404 } from "./component/pages/error404.jsx";
import {Layout} from "./component/common/Layout.jsx"
import { ContactUs } from "./component/pages/ContactUs.jsx";

function Router (){
    return (
        <>
        <HashRouter >
        <Routes>
        <Route element = {<Layout/>}>
          <Route path = "/" element = {<Home/>}  />
          <Route path = "/About" element = {<About/>} />
          <Route path = "/ContactUs" element = {<ContactUs/>}/>
          <Route path = "/Products" element = {<Products/>} />
          </Route>
          <Route path = "*" element = {<Error404/>} />
        </Routes>
        </HashRouter>
        </>
    )
}
export {Router}
