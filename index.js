'use strict';

// Arrays

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  }
}

function map(arr, cb){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function filterer(arr,cb){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) {newArr.push(arr[i]);}
  }
  return newArr;
}

function reduce(arr, cb, newThing) {
  for(let i = 0; i < arr.length; i++){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

console.log('forLoop()');
forLoop(numArr);

console.log('whileLoop()');
whileLoop(numArr);

console.log('map()');
let squares = map(numArr, (val => val * val));
console.log({squares});

console.log('filterer()');
let odds = filterer(numArr, (val => !!(val % 2)));
console.log({odds});

console.log('reduce()');
let sum = reduce(numArr, (acc, num) => {
  acc += num;
  return acc;
}, 0);
console.log({sum});

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: [...people], stuff: {...stuff}};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'BMW']};
let newState = {...state, people:['Odie', ...people, 'Garfield'], cars:[...stuff.cars, 'BMW'] };

console.log('People', newPeople);
console.log('New Stuff', newStuff);
console.log('State', state);
console.log('New State', newState);