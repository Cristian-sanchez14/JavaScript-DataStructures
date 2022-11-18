// Array
let list = ['tiger', 'cat', 'bear', 'bird']

console.log(list[0])

// An Array with in Array
let list1 = [['tiger', 'cat', 'bear', 'bird']]
console.log(list1[0][2])

/* Arrays 
1. var numbers = [1, 2, 3, 4, 5]
2. var boolean = [true, false, false, true, false]
3. var functionList = [function apple() {
  console.log("apple")
}]
4. var mixedList = ["apples", 3, undefined, true, function apple() {
  console.log("apples")
}]  Note: NOT RECOMMENDED 
*/

// JavaScript Array Methods
/* 
Converting Arrays to strings
1. toString()
2. join()

Remove elements and add new elements.
1. pop()
2. push()

Shifting Elements is equivalent to popping, but working on the first element instead of the last.
1. shift()
2. unshift()

Changing Elements: Array elements are accessed using their index number:
Array indexes start with 0:
[0] is the first array element
[1] is the second
[2] is the third ...
1. lenght [variable.length] = "string"


Merging (Concatenating) Arrays
1. concat()


Splicing and Slicing Arrays
1. splice() add new items/Remove Elements
2. slice() slices out a piece of an array into a new array.

Automatic toString()
1. toString() converts an array to a comma separated string
Note: All JavaScript objects have a toString() method.
*/

// Array exercise

let array = ['Banana', 'Apples', 'Oranges', 'Blueberries']
// 1. Remove the Banana from the array.
array.shift()
// 2. Sort the array in order.
array.sort()
// 3. Put "Kiwi" at the end of the array.
array.push('Kiwi')
// 4. Remove "Apples" from the array.
array.splice(0, 1)
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse()
// ['Kiwi', 'Oranges', 'Blueberries']

// bonus
// using this array,
var array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']]
// access "Oranges".
array2[1][1][0]
