/* This is a small basic facebook application! 
1. Signing in 
2. checka Sign in information against the database
3. Based if its right or wrong you get "newsfeed" or "wrong bassword"
*/

// username and password
let database = [
  {
    username: 'cristian',
    password: 'cool123'
  }
]

//news feed
let newsfeed = [
  {
    username: 'cristian',
    timeline: 'is working so much that its paying off'
  },
  {
    username: 'betty',
    timeline: 'Matlab is soooo cool'
  },
  {
    username: 'kevin',
    timeline: 'My gym is pretty cool!!'
  }
]

// let user know what to type in!!
let userNamePrompt = prompt("What's your username")
let passwordPrompt = prompt("What's your password")

// function signing in from the data of the "database"
function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed)
  } else {
    alert('Sorry, wrong username and password')
  }
}

signIn(userNamePrompt, passwordPrompt)
