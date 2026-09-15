import { Link } from "react-router-dom";
import { navigationLinks } from "../Data/MyData.jsx"

import { useContext } from "react";
import { MyContext } from "../pages/EcommContextAPI.jsx";


function Header() {
    let {value,updateValue} = useContext(MyContext);

    return (
        <header className="border-b border-slate-200 bg-white fixed w-[100%] h-[60px]">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
                aria-label="Main navigation">
                <Link to="/" className="text-xl font-bold text-slate-900 hover:text-blue-600">
                    ShopEasy
                </Link>
                <div className="hidden items-center gap-6 md:flex">
                    {navigationLinks.map((link) => {
                        // console.log(link);
                        // console.log(link.name);
                        // console.log(link.path);
                        return (
                            <Link to={`${link.path}`}
                                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"  >
                                {link.name}
                            </Link>
                        )
                    })
                    }
                </div>
                <div className="flex gap-10 justify-center">
                     <h1 className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition ">My Cart <span>{value}</span></h1>
                     <Link
                    to="#cart"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Login</Link> 
                </div> 
            </nav>
        </header>
    )
}

export { Header }
