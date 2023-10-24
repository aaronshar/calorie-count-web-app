import React from 'react';

function TopicsPage(){
    return(
        <>
            <h2>Web Development Concepts</h2>
            <nav className="page">
                <a href="#article1">About Web Servers</a>
                <a href="#article2">Frontend Design</a>
                <a href="#article3">Optimizing Images</a>
                <a href="#article4">Cascading Stylesheet</a>
                <a href="#article5">Forms</a>
                <a href="#article6">Express</a>
                <a href="#article7">JavaScript</a>
                <a href="#article8">DOM</a>
            </nav>
            <article id="article1">
                <h3>About Web Servers</h3>
                <p>
                    This page was created using HTML and is stored in a file called index.html which contains the code and text that make up this page. To create index.html, I created a folder
                    for the project on my computer, opened the folder in VS Code, created a new file called index.html. Then I added the necessary HTML tags using the shortcut, cntl-i. Index 
                    is typically the default name for the HTML file of the home page of a website. Index can also refer to the directory of files and folders under a website's domain. 
                </p>
                <p>
                    At this stage, the Web Dev/Inspector tools show the names of files and displays their status. The index.html file has status code 200 or OK, meaning the
                    request was successful. Other files listed are main.js and main.css, which have "failed" statuses and are in red.
                </p>
                <p>
                    After uploading the file to the web server there is a new file called favicon.ico with status 200 that was not there when the file was on the local computer. The file 
                    name also shows as "a1-shara/", the name of the folder that contains index.html, instead of "index.html". The time is also much longer and includes time for initial connection,
                    SSL, and waiting for server response.
                </p>
                <p>
                    The browser sends the request for favicon.ico to https://web.engr.oregonstate.edu/favicon.ico. That file exists at that location, which is why the status is 200 and the
                    OSU icon is displayed in the browser tab. The browser is sending requests for the main.css files and main.js files to https://web.engr.oregonstate.edu/~shara/a1-shara/main.css
                    and https://web.engr.oregonstate.edu/~shara/a1-shara/main.js. However, those files do not exist in that folder, so files cannot be found and their statuses are not 200.
                </p>
                <p>
                    The URL for this page is https://web.engr.oregonstate.edu/~shara/a1-shara/. The scheme is HTTPS, the subdomain is "web.engr", the host domain is oregonstate.edu, and the path
                    to resource is /~shara/a1-shara/.
                </p>
            </article>
            <article id="article2">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design is about creating a good experience for users when they are using an application. It includes on how an application looks visually as well as how users interact
                    with and navigate through a website or application. Good frontend design ensures that users are able to smoothly achieve their goals on the application and are satisfied with their
                    experience. 
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>A usable website ensures that users can achieve their goals, accurately, using the website.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>A usable website is optimized so that users can achieve their goals or perform tasks with as few steps as possible. </dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>A usable website should be intuitive enough for users to navigate without trouble, even if it is their first time on the website.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>A usable website should not have errors and should solve for potential issues by anticipating how common user actions may cause errors.</dd>
                    <dt><strong>Enjoyable / engaging</strong></dt>
                    <dd>A usable website should provide a pleasant experience for users and keep them engaged throughout their experience. Users should want to return to the website for future needs
                        after using it.</dd>
                </dl>
                <p>
                    Page layout tags are used to organize pages into logical sections. By default, the tags do not do much visually for the page besides break sections into blocks with line breaks. 
                    However, CSS can be applied to layout tags to visually style each block. Machines also use the tags to identify how the components of pages are laid out, which is important 
                    for search engines and screen readers.
                </p>
                <p>
                    The anchor element can be used to link to a specific location within a document or link to a different page by specifying the URL using the “href” attribute. To link to a specific 
                    location in a document, the “ID” attribute must first be added to the section that a user can jump to. Then, add the “#” symbol followed by the ID of that section to the end of 
                    the URL in “href” attribute of the anchor element. To link to a different page, the absolute URL or the relative URL can be inputted into the “href” attribute of an anchor element. 
                    The absolute URL is the complete URL to the resource while the relative URL is based on a location relative to the file using the URL.
                </p>
            </article>
            <article id="article3">
                <h3>Optimizing Images</h3>
                <p>
                    The 6 major specifications of images for the web are descriptive files names, small file sizes, exact dimensions, correct file formats, reduced resolution, and color mode. 
                </p>
                <p>
                    The most appropriate file formats are usually .JPG for photos and .GIF or sometimes 8-bit .PNG formats for line art.
                </p>
            </article>
            <article id="article4">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Stylesheets utilize CSS to style content on a webpage. HTML provides basic structure and organization, but stylesheets redefine that structure to make the pages readable, 
                    visually appealing, and usable.
                </p>
                <p>
                    The preferred method of incorporating style is using externally linked .CSS files. However, style can also be embedded within a “style” tag, inline within an element, 
                    in JavaScript template literals within a JavaScript function, and in regular JavaScript.
                </p>
            </article>
            <article id="article5">
                <h3>Forms</h3>
                <p>
                    Accessible forms should provide clear instructions on how to fill out the forms and have clear labels. They should inform users why the data is being gathered and it should
                    be clear which fields are required. Users should be able to start typing to fill in the form without using the keyboard. Users should be able to fill out each form control 
                    using the keyboard - some users cannot/don't use a mouse or trackpad. It should be clear which order the fields should be filled and validation messages should be screen readable.
                </p>
                <p>
                    The "form" tag is used to add a form to an HTML document. Two important attributes of "form" are "action", which specified where the request from the form should be sent, and 
                    "method", which specifies the HTTP method to be used when the form is submitted. The "label" tag helps users understand the purpose of each element in the form. A label's "for"
                    attribute must match up with the ID attribute of its corresponding form control. "Fieldset" and "legend" tags separate form controls into groups to be more accessible. "Legend" should
                    give some direction to help users understand the purpose of the group. The "input" tag is used to collect user data within a form and two of its important attributes are "type" and "name".
                    "Type" changes how the user inputs data and changes how the options are displayed. Some examples of types are "email", "checkbox", and "radio". The "name" attribute is important because 
                    after users submit their information, their data in each part of the form is associated with the "name" attribute input. Other important tags are "select", which is used in conjunction
                    with "option". "Select" is used to provide users with a drop-down list of choices, which are listed using the "option" tag. "Textarea" allows users to input longer lines of text for messages.
                    "Button" is typically used with the "type=submit" attribute that users can activate to perform the action specified in the "form" tag.
                </p>
                <p>
                    The major form style recommendations to improve usability involve adjusting size, placement, and colors so all users are able to fill out the forms with as little trouble as possible
                    on phones and larger devices. That includes spacing out form elements properly, placing labels above form controls, and adjusting size of the form controls so users are able to easily access 
                    them on small devices. To help users understand how to fill out the form, we can label which controls are required, use autofocus to place the cursor on the first field, and indicate when an
                    input is valid or invalid by changing the border of the box.
                </p>
            </article>
            <article id="article6">
                <h3>Express</h3>
                <p>
                    Node is an open source, cross-platform runtime environment that allows users to develop server-side and networking applications in JavaScript. It also contains a large library of JavaScript 
                    modules that can be utilized to simplify development. NPM has two main functions. It is an online repository where users can publish and download Node.js packages. It is also a command-line 
                    utility that users can utilize to install packages from its online repository and manage dependencies.
                </p>
            </article>
            <article id="article7">
                <h3>JavaScript</h3>
                <p>
                    The main data types are numbers, Boolean values, strings, symbols, the special values "undefined" and "null", and objects. Objects, arrays, and JSON all contain name-value pairs. The names are
                    also called properties of the object and users are able to create, read, update and delete properties of the object. The values of objects can be created, updated, and read using the "." 
                    operator. Name-value pairs can be deleted using the "delete" operator. Arrays are objects whose property names are numbered strings, but users can also access elements using a 0-based integer index
                    in square brackets. JSON objects also contain name-value pairs. Users are able to convert JavaScript objects to JSON strings using the "JSON.stringify" method. Conversely, the "JSON.parse" method
                    can be used to create a JavaScript object from a JSON string.
                </p>
                <p>
                    Users are able to execute conditional statements in JavaScript using "if" statements or "switch" statements. "If" statements executes certain code if the provided expression evaluates to true. "Switch"
                    statements compare a variable to different values and executes code based on what the variable matches with. Loops execute specific lines of code until the provided statement evaluates to false. The 
                    "while" loop checks a condition and executes statements while the condition evaluates to true. The "do while" loop is similar, but it executes the statements and then checks the condition. The "for" loop
                    executes a block of code a certain number of times depending on the loop condition.
                </p>
                <p>
                    Object-oriented programming organizes data around objects. It is a useful way to organize data for large, complex programs. Objects have an identity, state, and behavior. 
                </p>
                <p>
                    In functional programming, programs are created by applying and composing functions. In JavaScript, functions are considered "first-class" values. That means users are able to assign functions to variables,
                    use functions as arguments for other functions, and return functions within a function. 
                </p>
            </article>
            <article id="article8">
                <h3>Document Object Model</h3>
                <p>
                    Developers update the DOM of a page in order to make pages dynamic and interactive. The page can change and update in response to specific actions and user input. JavaScript is used to 
                    interact with the DOM and register event handlers to respond to specific events.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;