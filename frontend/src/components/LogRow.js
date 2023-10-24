import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function LogRow({ food, onUpdate, onDelete }){
    return(
        <>
            <tr>
                <td>{food.food}</td>
                <td>{food.cals}</td>
                <td>{food.date.slice(0, 10)}</td>
                <td><AiFillDelete className="biggerIcon" onClick={() => onDelete(food._id)}/></td>
                <td><AiFillEdit className="biggerIcon" onClick={() => onUpdate(food)}/></td>
            </tr>    
        </>  
    );
}

export default LogRow;