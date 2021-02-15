# Project 3 - cityspace

## GA SEI Project 3: Full-Stack MERN Application

You can find a hosted version of our app here :  [cityspace](https://cityspace.herokuapp.com/)

To access all available features, please sign up for an account or use the following details:

email: elsieadmin@email.com
password: pass

## Collaborators

* Tobi Lesi - [Github](https://github.com/olulesi)
* Ricky Cato - [Github](https://github.com/rickyc000)
* Edwyn Abi-Acar - [Github](https://github.com/Edwyn26)


## Overview

This was my third project on the General Assembly Software Engineering Immersive course.  As a group of 4, we were given a week to build a full-stack application of our choice.

Our idea was cityspace. Cityspace is a platform that encourages users to explore outdoor spaces in London. Given that we are all now used to spending more time outside, the app has the aim of discovering new and interesting places throughout the city. Users can sign up to our app, explore spaces based on their preferences, as well as add new spaces that they have come across. The cityscape community can then react with the different spaces - adding comments or adding the space to their favourites.

This Readme will outline the approach we took and the wins and challenges that I encountered along the way.


## Brief

* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers.
* **Be deployed online** so it’s publicly accessible.



## Timeframe and Technologies Used

**Timeframe**: 1 week in a group of 4 developers.

* React.js
* JavaScript (ES6)
* HTML5 
* Node.js
* Semantic UI React
* MongoDB
* Mongoose
* Express.js
* Yarn
* Axios
* CSS5 and SASS
* Cloudinary
* Dependencies installed: Mapbox, slick-carousel, react-router-dom, react-slick
* [Postcodes.io API](https://postcodes.io/)
* Git & GitHub
* Insomnia
* Trello
* VSCode & Eslint


## Features

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

## Approach Taken

**Planning**

Planning our idea and dividing the work was key to the success of the project. The first day was entirely devoted to coming up with the idea, discussing how we wanted the functionality and styling to work, and how we would divide the work.

Trello was an important tool that we used to keep track of our work both individually and as a group. 

We also came up with detailed wireframes as well as sourcing key reference points of other websites (Eg. Airbnb and Pinterest) so that we had an idea of how we wanted the site to look before starting on the development side of things.

**Development**

Once we had a detailed plan and certain idea of what we were aiming to build, we started on the development of the site.  As all four members of our group were keen to all work full-stack, we decided to start by working on the back-end as a group (in order to have a clear understanding of how the data was going to be retrieved) and then move onto the front-end.

**Back-End**

The first few days were spent either as a group or in pairs, setting up the different components of the back-end.  I focussed on setting up the relationship between our spaces and users - in particular the ‘favouriting functionality’ - ie. how a user could favourite a space and how this data would be stored on both the space and the user. 

Within the space model, we added a ‘favouritedBy’ value which would display an array of all the users who had liked that space.


```
const citySpaceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 800 },
  image: { type: String, required: true },
  location: { type: Object, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
  comments: [commentSchema],
  favouritedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true  }],
  tags: [{ type: String, required: false }],
})

```

* Then on the User model, we created two virtual schemas - one for the spaces they had created and the spaces they had favourited.


```
userSchema.virtual('createdSpaces', {
  ref: 'Space',
  localField: '_id',
  foreignField: 'owner',
})

userSchema.virtual('favouritedSpaces', {
  ref: 'Space',
  localField: '_id',
  foreignField: 'favouritedBy',
})


```

* Then when it came to setting up the user profile request - we populated each user profile with both their favourite spaces and the spaces they had created.

```
async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id).populate('favouritedSpaces').populate('createdSpaces')
    if (!user) throw new Error(notFound)
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

```

Similarly,  I then moved onto how the actual favouriting functionality would work - (i.e how the user could add a space to their favourites). This was something that we had not covered in class and I enjoyed the task of solving how this would work. 

```
async function favouriteASpace(req, res, next) {
  const { id } = req.params
  console.log(req.params)
  try {
    const space = await Space.findById(id)
    if (!space) throw new Error(notFound)
    // const favourited = { owner: req.currentUser._id }
    space.favouritedBy.push(req.currentUser._id)
    await space.save()
    return res.status(201).json(space)
  } catch (err) {
    next(err)
  }
}

```

* Keen to populate our site with lots of different spaces, we each focussed on creating a certain number of spaces that we could seed when deploying the site. From the outset, we aimed to find high-quality images as this would add to the overall aesthetic of the site. 


**Front-End**


## Challenges

* Given that this was my first time working in a larger group, the main challenge was dividing the work and finding a work flow that was most efficient for all of us.  I think a challenge was working on Zoom and coordinating all the tasks over zoom - which proved to be difficult with various internet issues.

## Wins
* I think we were all extremely happy with how the site looked by the end and how much we were able to build within the timeframe of a week. The site was exactly how we had imagined and it had a professional and clean finish to it as intended.
* A huge win was the way we worked as a group. Daily group stand-ups and clear communication between us all helped the process and made the project really enjoyable. Similarly, avoiding conflicts on GitHub and overall smooth running of the project were major wins for us all. 

## What I learned
* This was my first project working on back-end and I feel I learned a lot about how the requests were set up and creating relationships between different models.
* With regards to the front-end, I continued to develop my styling skills.
* I inevitably learned a lot from my teammates, as well as how to work efficiently in a group.
* The project was invaluable in terms of learning how to use Team GIT - for the first few times, we would co-ordinate with one another and oversee each-other pushing to the development branch. I think this really helped the overall process of using GitHub and insured the smooth running of the project and avoiding problematic conflicts.

## Future Features

* If we had more time, we spoke about building the app for multiple cities - not just London. 
* We also would have liked to have been able to add multiple photos for each space.
