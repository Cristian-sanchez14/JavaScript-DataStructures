// Object
// Object is best to store users information
let user = {
  name: 'John',
  age: 34,
  hobby: 'Soccer',
  isMarried: false
}
// How to grap properties of Objects
user.name
user.hobby
user.isMarried

// How to add properties to an Object ?
user.favoriteFood = 'pizza'
/*
let user = {
  name: "John"
  age: 34
  favoriteFood: "pizza"
  hobby: "Soccer"
  isMarried: false
}
*/
user.isMarried = true
/*
let user = {
  name: 'John',
  age: 34,
  favoriteFood: "pizza"
  hobby: 'Soccer',
  isMarried: true
}
*/

// how to access an Object
// user1.spells[1] = "shazam"
// Arrays inside of an Object
let user1 = {
  name: 'John',
  age: 34,
  hobby: 'Soccer',
  isMarried: false,
  spells: ['abrakadra', 'shazam', 'boo'],
  shout: function () {
    {
      /* shout() is a method */
    }
    console.log('AHHHH!!')
  }
}

//  Object inside of an Array
// access password of andy: list[0].password
let list = [
  {
    username: 'andy',
    password: 'secret'
  },
  {
    username: 'jess',
    password: '123'
  }
]

// console is an Object Method
// assert: ƒ assert()
// clear: ƒ clear()
// context: ƒ context()
// count: ƒ count()
// countReset: ƒ countReset()
// createTask: ƒ createTask()
// debug: ƒ debug()
// dir: ƒ dir()
// dirxml: ƒ dirxml()
// error: ƒ error()
// group: ƒ group()
// groupCollapsed: ƒ groupCollapsed()
// groupEnd: ƒ groupEnd()
// info: ƒ info()
// log: ƒ log()
// memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2190000000}
// profile: ƒ profile()
// profileEnd: ƒ profileEnd()
// table: ƒ table()
// time: ƒ time()
// timeEnd: ƒ timeEnd()
// timeLog: ƒ timeLog()
// timeStamp: ƒ timeStamp()
// trace: ƒ trace()
// warn: ƒ warn()
