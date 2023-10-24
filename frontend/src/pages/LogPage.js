import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable';


function LogPage({ setFoodItem }){
    
    const redirect = useNavigate();

    const [foods, setFoods] = useState([])
    

    const loadFood = async () => {
        const response = await fetch('/log');
        const foodItems = await response.json();
        setFoods(foodItems);
    }

    const onUpdateFood = async food => {
        setFoodItem(food);
        redirect('/editfood');
    }

    const onDeleteFood = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'delete' })
        if (response.status === 204) {
            const newResponse = await fetch('/log');
            const foodItems = await newResponse.json();
            setFoods(foodItems)
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadFood();
    }, []);

    return(
        <>
            <h2>Log of food calorie information</h2>
            <article>
                <p>Edit, delete, or add the calorie information of food you have eaten by clicking the various icons in the table.</p>
                <LogTable foods={foods} onUpdate={onUpdateFood} onDelete={onDeleteFood}/>
            </article>
        </>
    );
}

export default LogPage;