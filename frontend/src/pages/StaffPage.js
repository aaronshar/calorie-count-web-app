import React, { useState } from 'react';
import StaffRow from '../components/StaffRow.js';

function StaffPage(){
    let [results, setResults] = useState([])
    const getResults = () => {
        fetch("https://randomuser.me/api?results=10")
            .then(result => result.json())
            .then(data => setResults(data.results))
            .catch(() => alert("Unable to fetch staff info from API"));
        }
    return(
        <>
            <h2>Staff</h2>
            <article>
                <p>
                    Add ten staff members and their contact information to the table below.
                    <button onClick={getResults}>Generate Staff</button>
                </p>
                <table>
                    <caption>Staff</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((person, i) => <StaffRow person={person} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;