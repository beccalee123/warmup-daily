'use strict';

//Arrays

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

forLoop(numArr);

function whileLoop(arr){
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  };
};

whileLoop(numArr);

let mapper = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i], i));
  };
  return newArr;
};

let mappedNums = mapper(numArr, (value, index) => {
  return console.log(value);
});

let filterer = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i], i)){newArr.push(arr[i])};
  };
  return newArr;
};

// filterer(numArr, 4);

// let reducedNums = (( startingValue, value, idx) => {
//   //...do some stuff
//   // return startingValue

// }, startingValue);

//Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {...people, ...stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Subaru']};
let newState = {...state};

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);