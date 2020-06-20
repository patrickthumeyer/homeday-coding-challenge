## My steps throughout the project

1. Install create react app
2. Install react-browser-dom
3. Install node-sass
4. Set up folder structure with pages folder and create component pages for login-page and user-details-page
5. Add React Router Elements to App.js and link components inside the Route Element
6.

- Create Login-Form class component
- get username with onChangeHandler and add it to the state
- login-form: fetch userdata in getUserData function and pass data to user-details component via route. Username on route is a variable (:username)  
  holy grail to fix this issue found here: https://stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react

7. user-details: Fetch data via match.params.user (which is the variable from the route in App.js) and set it to the state.  
   To have to data available on page load with the url function has to be inside ComponentDidMount.

8. Add JSX to render in user-details component

9. Style login-form component and user-details component with SCSS using nested elements

10. Add responsive design to components

11. Add error handling to getUserData function in both components

### Biggest Challenges and Gotchas

#### For Login-Form

to fetch data I had to use api.github.com/users/:user and not developer.github/v3/users/ which was
just the documentation

In many cases fetch goes into ComponentDidMount but since I´m fetching after the user entered a username the fetch happens later. Therefore I created a function called getUserData.

Since the login-form component unmounts on submit I couldn´t get the data from the state in time. I added the data as an additional property on the location by using "this.props.history.push" in order to pass the userData to the UserDetails Page via the Route in App.js

#### For User Details

Since I fetch the user with the form in the login-form component I don´t have the user available when
I type it into the url directly. Therefore I need to fetch the user here again by accessing the username directly in the URL by using this.props.match.params.user. The fetched value I pass to the state.

# Homeday Coding Challenge: Github user fetching

## Instructions

### Create an app that allows users to search for a Github user and see some information about them. It should consist of two views:

#### The form view:

The user should be able to type a username.
The input should have validation (No empty values allowed).
The user should be able to submit the form.

#### The results view:

It should show some information about the searched user (image, first name and last name as a minimum).

### Bonus

The route of the results page contains the username which allows the user to access the results page directly if they have the username (e.g. /results/homeday-de)
Semantic HTML is used
Error handling

### Additional info

To fetch a Github user you can use this endpoint: https://developer.github.com/v3/users/#get-a-single-user

### General guidelines

Use any framework, library or API you like
The code should be readable and clearly commented when needed
The project should be pushed to a public github repository
README.md should contain project documentation (how to run and build the project locally from scratch, project structure, gotchas,... anything worth mentioning)
The UI should be responsive

### Evaluation Criteria

UX / UI: Does the app look and feel good?
Code Quality: Is the code clean, consistent, well-structured and easy to understand?
