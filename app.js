// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function adder(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// var add5 = adder(5);
// console.log(add5(10)); // 15


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// let array = ["apple", "banana", "mango", "watermelon", "peach", "lemon", "potato", "orange", "strawberry", "pomegranate"];

// function search(data, value) {
//     if (data.length === 0) {
//         return false;
//     }
//     if (data[0] === value) {
//         return true;
//     }
//     return search(data.slice(1), value);
// }

// console.log(search(array, "banana")); // true


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function addParagraph(text) {
//     const paragraph = document.createElement('p');
//     const content = document.createTextNode(text);
//     paragraph.appendChild(content);
//     document.body.appendChild(paragraph);
// }

// addParagraph("Hello World!");

// 4.Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function addListItem(text) {
//     const listItem = document.createElement('li');
//     const content = document.createTextNode(text);
//     listItem.appendChild(content);
//     const unorderedList = document.querySelector('ul');
//     unorderedList.appendChild(listItem);
// }

// addListItem('New list item');

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }

// const myElement = document.getElementById('paraDiv');
// changeBackgroundColor(myElement, 'red');


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// const myObject = { name: 'John', age: 30 };
// saveObjectToLocalStorage('my-object', myObject);

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function retrieveObjectFromLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key));
// }

// const myObject = retrieveObjectFromLocalStorage('my-object');
// console.log(myObject);

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function saveObjectPropertiesToLocalStorage(obj) {
//     // Save each property to localStorage
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             localStorage.setItem(key, JSON.stringify(obj[key]));
//         }
//     }

//     // Retrieve the object from localStorage and return it as a new object
//     const newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//     }
//     return newObj;
// }

// const myObject = { name: 'John', age: 30 };
// const newObj = saveObjectPropertiesToLocalStorage(myObject);
// console.log(newObj);