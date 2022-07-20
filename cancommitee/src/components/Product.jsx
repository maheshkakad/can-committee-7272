import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product , setProduct] = useState({});
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        if(id) {
            fetch(`http://localhost:9090/products/${id}`)
            .then(r => r.json())
            .then(d => setProduct(d))
        }
    } , [id])
    return(<div>
       produst ID : {id}
        <div><h2>{product.name}</h2></div>
        <h2>Price:{product.price}$</h2>
    </div>
    );
}

export default Product;