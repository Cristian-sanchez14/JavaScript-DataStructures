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
  },
  {
    username: 'sally',
    password: 'cool777'
  },
  {
    username: 'gary',
    password: 'cool000'
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

// function signing in from the data of the "database"
function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      console.log(newsfeed)
      return true
    }
  }
  return false
}

// is user logged in show news feed. else alerts "sorry wrong username and password"
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed)
  } else {
    alert('Sorry, wrong username and password')
  }
}
// let user know what to type in!!
let userNamePrompt = prompt("What's your username")
let passwordPrompt = prompt("What's your password")

signIn(userNamePrompt, passwordPrompt)
