import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillFileAdd } from "react-icons/ai";

function CreatePage(){
    const [food, setFood] = useState('Chicken');
    const [cals, setCals] = useState(0);
    const [date, setDate] = useState();
    
    const redirect = useNavigate();

    const toAdd = () => {
        redirect('/createfood')
    }
    
    const addFood = async () => {
        const newItem = {food, cals, date}
        const response = await fetch('/log',{
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 201){
            alert("The Food item was successfully added.")
            redirect('/log');
        } else{
            alert("The food item was unable to be added.")
            redirect('/log');
        };
    }

    return(
        <>
            <h2>Log a food item.</h2>
            <article>
                <p>Please enter the details of the food item you would like to log in the table below.</p>
                <table className="foodlog">
                    <caption>Add a food item.</caption>
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
                                <label for="food" className='required'>Food Name</label>
                                <input type="text" value={food} onChange={e => setFood(e.target.value)} id="food" required />
                            </td>
                            <td>
                                <label for="cals" className='required'>Calories</label>
                                <input type="number" value={cals} onChange={e => setCals(e.target.value)} id="cals" required />
                            </td>
                            <td>
                                <label for="date" className='required'>Date</label>
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} id="date" required />
                            </td>
                            <td></td>
                            <td></td>
                            <td><label for="submit"><button onClick={addFood} id="submit">Save</button></label></td>
                        </tr>
                    </tbody>
                </table>
            </article> 
        </>  
    );
}

export default CreatePage;