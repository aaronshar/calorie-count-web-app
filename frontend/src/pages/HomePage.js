import React from 'react';


function HomePage(){
    return(
        <>
            <h2>Welcome to my personal website!</h2>
            <article >
                <p>
                    This website utilizes a couple different technologies to build out the frontend and the backend. The frontend of the website utilizes React which incorporates HTML and is 
                    designed using CSS. I utilized the Poppins font from Google Fonts, created optimized images, and imported icons from the "React-icons" library for the design of the website.
                    For the backend of the website, I implemented a REST API using Node, Express, and MongoDB. Express is the server-side framework running inside a Node server and MongoDB is
                    the database that stores the data in the food log portion of the website. Mongoose was used to interact with MongoDB using JavaScript. JavaScript was used to program both 
                    the frontend and the backend of the website.
                </p>
            </article>
        </>
    );
}

export default HomePage;