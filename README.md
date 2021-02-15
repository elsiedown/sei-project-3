# Project 3 - CitySpace

## GA SEI Project 3: Full-Stack MERN App

You can find a hosted version of our App here :  [cityspace](https://cityspace.herokuapp.com/)

## Collaborators

Tobi Lesi - [Github](https://github.com/olulesi)
Ricky Cato - [Github](https://github.com/rickyc000)
Edwyn Abi-Acar - [Github](https://github.com/Edwyn26)


## Overview

This was my third project on the General Assembly Software Engineering Immersive course.  As a group, we were given a week to build a full-stack application of our choice.

Our idea was cityspace. Cityspace is an App that encourages users to explore outdoor spaces in London. Users can sign up to our app, and post a space that they have come across. The cityscape community can then react with the different spaces - adding comments or adding the space to their favourites.

This Readme will outline the approach we took and the wins and challenges that I encountered along the way.


## Brief

* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers.
* **Be deployed online** so it’s publicly accessible.



## Timeframe and Technologies Used*

**Timeframe**: 1 week in a group of 4 developers.

* React.js
* Node.js
* Semantic UI React
* MongoDB
* Mongoose
* Express.js
* Yarn, npm 
* Dependencies installed: Mapbox, slick-carousel
* Git & GitHub
* Insomnia
* Trello
* VSCode & Eslint


**Features**

* Landing Page
* Register User
* Index of all cityspaces
* Detail view for each cityspace
* View all spaces on map
* Filter by  ‘type’ of space
* Login & Logout with restricted visibility for logged in users
	* Create, edit and delete space
	* Ability to comment on spaces and add to favourites
	* User profile 
	* Other user profile

## Approach Taken



## The site:

 User can sign up, adding their details and choosing their preferences of what sort of spaces they are looking to find:

![](client/src/screenshots/sign-up.png)

User logs in:

![](client/src/screenshots/login.png)

Upon logging in, user lands on the main homepage - which includes featured spaces, spaces recommended for that user (based on the preferences they chose), map view of all spaces, and different categories:

![](client/src/screenshots/welcome.png)
![](client/src/screenshots/welcome-two.png)
![](client/src/screenshots/welcome-three.png)
![](client/src/screenshots/welcome-four.png)


The categories page is another place to explore and find a space. By clicking on the different category titles at the top of the page, the results are then filtered to that category.  By hovering on each space - the user can see how many likes that space has as well as the name of the space:

![](client/src/screenshots/categories.png)

The view page for each space. The user can comment on the space (delete the comment). The user can also favourite the space from this page as well as click on the user profile of the person who added the space, the categories and the individual map view of that space.

![](client/src/screenshots/showpage.png)



A user can add a space (and again choose the categories which best describe that space):

![](client/src/screenshots/add-space.png)

A user can then view their profile (as well as other users) - to view the spaces they have favourited or keep track of the spaces they’ve created. Their profile also displays their favourite categories:

![](client/src/screenshots/profile.png)



## Challenges


## Wins

## What I learned

## Future Features

* If we had more time, we spoke about building the app for multiple cities - not just London. 
* On a smaller scale, I would have liked to add the favouriting functionality to the categories index page - so that users could like spaces as they scroll through.
* It would have been nice to add a 'follow user' function as well, to add to the community sense of the app.
