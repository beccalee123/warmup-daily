// Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(i);
  }
}

function whileLoop(arr){
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  };
}

function map(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(i);
  }
  return newArr
}

function filter(arr, value){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      newArr.push;
    }
  }
  return newArr;
}

function reduce(arr, accumulator, currentVal){
  let accumulator = 0
  for(let i = 0; i < arr.length; i++){
    accumulator += arr[i]
  }
  return arr;
}

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};



// Begin with the starter code below …
// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
// Prove that the original people, stuff, and state are unchanged.
