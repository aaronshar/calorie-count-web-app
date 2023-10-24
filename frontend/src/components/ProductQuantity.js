import React, { useState } from 'react';
import { TbSquarePlus, TbSquareMinus } from "react-icons/tb";

function ProductQuantity(){
    let [quantity, setQuantity] = useState(0)
    
    function increaser(){
        if(quantity < 10){
            setQuantity(quantity + 1);
        }
    }

    function decreaser(){
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
    }
    
    return(
        <>
            <TbSquarePlus onClick = {increaser} className="biggerIcon"/>
            <p>{quantity}</p>
            <TbSquareMinus onClick = {decreaser} className="biggerIcon"/>
            
        </>
    )
}

export default ProductQuantity