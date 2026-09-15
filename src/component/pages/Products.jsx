
import axios from "axios"
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { MyContext } from "../pages/EcommContextAPI.jsx";

export default function Products() {
    

    return (
        <>
            <section className='m-auto border-black-1 p-5 '>
                <h1 className='text-center font-bold text-3xl'>Our All Products </h1>
                <div className='grid grid-cols-[20%_1fr] gap-5 bg-black/10 p-3 mt-4'>
                    <aside className="p-4 ">
                        <h3 className='text-2xl  font-bold text-red-500'>Category</h3>
                        <div className="mt-4">
                            <Category />
                        </div>

                    </aside>
                    <article >
                        <h3 className='text-2xl text-center font-bold text-red-500'>Products </h3>
                        <div className="bg-blue-250   grid grid-cols-4 gap-5 mt-4">
                            <Myproducts />
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
export { Products };

//Category Section 

function Category() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then((FulfilledResult) => {

                setCategory(FulfilledResult.data)  // Pass array
                // setCategory(FulfilledResult.data.name)  
            })
            .catch(() => {
                console.log("Error");

            })

    }, [])
    return (
        <>
            {category.map((CatValues) => {
                // console.log(CatValues);
                return (
                    <div className="gap-2 shadow-lg bg-gray-200 shadow-red/50"><p>{CatValues.name}</p></div>
                )
            })}
        </>
    )
}


// Products Componet 

function Myproducts() {
    let { value, updateValue } = useContext(MyContext);
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((ProductsData) => {
                console.log(ProductsData.data.products);
                setproducts(ProductsData.data.products);
            })
    }, []);

    function UpdateCart() {
        return updateValue(value + 1)
    }

    return (
        <>
            {
                products.map((mydata) => {
                    console.log(mydata)
                    return (
                        <div className="p-2 bg-gray-100">
                            <img src={mydata.thumbnail} alt="" />
                            <div className="flex justify-between p-2">
                                <p>${mydata.price}</p>
                                <button className="bg-green-300 border p-[2px] rounded text-sm" onClick={UpdateCart}>Add Cart </button>

                            </div>
                            <h1 className="bg-yellow-200 text-[15px]">{mydata.title}</h1>
                            <p className="text-[12px]">{mydata.description}</p>
                        </div>

                    )


                })

            }

        </>
    )
}















