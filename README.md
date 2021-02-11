# Project 3 - CitySpace

## GA SEI Project 3: Full-Stack MERN App

You can find a hosted version of our App here : 

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

[image:840F03C8-8D0F-4154-A2BD-AC9EFF5A60F5-10106-0001D6978B5AA842/Screenshot 2021-02-08 at 17.27.07.png]


User logs in:
[image:BE83D624-E983-4938-8F30-F614C81E8FCC-10106-0001D6978B132461/Screenshot 2021-02-08 at 17.27.26.png]

Upon logging in, user lands on the main homepage - which includes featured spaces, spaces recommended for that user (based on the preferences they chose), map view of all spaces, and different categories:

[image:775F81DB-0B4C-4997-8308-C96A403180FA-10106-0001D6978AD13A2B/Screenshot 2021-02-08 at 17.27.47.png]


[image:1A61B3A7-5EDC-439F-94A7-AFF4095C9FDB-10106-0001D697899984F5/Screenshot 2021-02-08 at 17.28.41.png]
[image:C030AF3F-FA80-4C08-ACE8-375951243911-10106-0001D6978A7C3F58/Screenshot 2021-02-08 at 17.27.59.png]

[image:8AC13771-6F20-41AA-AF6C-A7D0C3CB7A7F-10106-0001D6978B9BA24F/Screenshot 2021-02-08 at 17.25.49.png]

The categories page is another place to explore and find a space. By clicking on the different category titles at the top of the page, the results are then filtered to that category.  By hovering on each space - the user can see how many likes that space has as well as the name of the space:

[image:760BFB39-4775-4D2C-81AB-7DD04D0A251D-10106-0001D697884A8D9A/Screenshot 2021-02-08 at 17.29.59.png]

The view page for each space. The user can comment on the space (delete the comment). The user can also favourite the space from this page as well as click on the user profile of the person who added the space, the categories and the individual map view of that space.

[image:913C1917-47E0-44B3-92B1-94BBC89FF473-10106-0001D697878A6A13/Screenshot 2021-02-08 at 17.30.38.png]



A user can add a space (and again choose the categories which best describe that space):

[image:F0F67432-22FF-445B-A1C1-ED91B43EEE4B-10106-0001D69786A35C7A/Screenshot 2021-02-08 at 17.31.25.png]

A user can then view their profile (as well as other users) - to view the spaces they have favourited or keep track of the spaces they’ve created. Their profile also displays their favourite categories:

[image:EF65B855-56CF-4349-941A-36CA6280D731-10106-0001D69787338504/Screenshot 2021-02-08 at 17.31.11.png]



## Challenges


## Wins

## What I learned

## Future Features

* If we had more time, we spoke about building the app for multiple cities - not just London. 
* On a smaller scale, I would have liked to add the favouriting functionality to the categories index page - so that users could like spaces as they scroll through.
* It would have been nice to add a 'follow user' function as well, to add to the community sense of the app.
