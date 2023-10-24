import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillFileAdd } from "react-icons/ai";

function EditPage({ foodItem }){
    const [food, setFood] = useState(foodItem.food);
    const [cals, setCals] = useState(foodItem.cals);
    const [date, setDate] = useState(foodItem.date);
    
    const redirect = useNavigate();

    const toAdd = () => {
        redirect('/createfood')
    }
    
    const editFood = async () => {
        const response = await fetch(`/log/${foodItem._id}`,{
            method: 'PUT',
            body: JSON.stringify({
                food: food,
                cals: cals,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200 || response.status === 204){
            alert("The Food item was successfully edited.")
            
        } else{
            const error = await response.json();
            alert("The food item was unable to be edited.")
        };
        redirect('/log');
    }

    return(
        <>
            <h2>Log a food item.</h2>
            <article>
                <p>Please update the details of the food item you would like to edit.</p>
                <table className="foodlog">
                    <caption>Edit a food item.</caption>
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
                        <tr>
                            <td>
                                <label for="food">Food Name</label>
                                <input type="text" value={food} onChange={e => setFood(e.target.value)} id="food" />
                            </td>
                            <td>
                                <label for="cals">Calories</label>
                                <input type="number" value={cals} onChange={e => setCals(e.target.value)} id="cals" />
                            </td>
                            <td>
                                <label for="date">Date</label>
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} id="date" />
                            </td>
                            <td></td>
                            <td></td>
                            <td><label for="submit"><button onClick={editFood} id="submit">Save</button></label></td>
                        </tr>
                    </tbody>
                </table>
            </article> 
        </>  
    );
}

export default EditPage;