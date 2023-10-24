import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillFileAdd } from "react-icons/ai";
import LogRow from './LogRow';

function LogTable({ foods, onUpdate, onDelete }){
    const redirect = useNavigate();
    const toAdd = () => {
        redirect('/createfood')
    }

    return(
        <>
            <table className="foodlog">
                <caption>Log of recently consumed food.</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th className="addiconcol"><AiFillFileAdd className="biggerIcon" onClick={toAdd}/></th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food, i) => <LogRow food={food} key={i} onUpdate={onUpdate} onDelete={onDelete} />)}
                </tbody>
            </table>
        </>  
    );
}

export default LogTable;