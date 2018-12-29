'use strict';

//Array methods:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for loop

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(i);
  }
}

// while loop

let whileLoop = (arr) => {
  while(i < arr.length){
    console.log(i);
  }
}

//Map:

let mapper = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i ++){
    newArr.push(cb(arr[i], i));
  }
  return newArr;
};

let mappedFolks = mapper(arr, (value, index) => { //we can do a test like this when testing our above function
  return value.toUpperCase();
});

//Filter:

let filterer = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i ++){
    if (cb(arr[i], i)){newArr.push(arr[i])};
  }
  return newArr;
};


//Reduce:

//Still super stuck on this. Need to spend some serious time reviewing.

//this one gets starting value, current value, and idx

let reducedFolks = people.reduce(( startingValue, value, idx) => {
  //...do some stuff
  // return startingValue

}, startingValue);


// Objects:

// Starter code

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {...family, ...stuff};

let newPeople = [...people, 'Odie', 'Garfield'];
const newStuff = {...stuff, cars: 'Subaru'};
let newState = {...family, ...stuff};

console.log(people);
console.log(stuff);
console.log(state);