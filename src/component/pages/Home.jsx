import { About } from "./About"
import { Products } from "./Products"
function Home() {
    return (
        <>
            {/* <h1 className="text-center text-red-500 font-bold text-4xl">Learning state Hooks with Tailwind</h1> */}
            <About/>
            <Products/>
        </>
    )
}
export { Home }
