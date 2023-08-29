import React, { useEffect, useState } from "react";

function product_button (){

    const [List_Products, setList_Products] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/product").then((response) => {
            setList_Sales(response.data)
        })
    }, [])

    function getProduct() {
        return List_Sales.map((value, key) => (
            <th>
                <button className="button" onClick={createDetail}>${value}</button>
            </th>
            
        ))
    }

    return{
        getProduct
    }
}

export default product_button()