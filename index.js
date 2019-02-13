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

function filter(arr, cb){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) {newArr.push(arr[i]);}
  }
  return newArr;
}

function reduce(arr, cb, acc){
  for(let i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i], i);
  }
  return acc;
}

console.log('forLoop()');
forLoop(numArr);

console.log('whileLoop()');
whileLoop(numArr);

console.log('map()');
let squares = map(numArr, (val => val * val));
console.log({squares});

console.log('filter()');
let odds = filter(numArr, (val => !!(val % 2)));
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
const newStuff = {...stuff, cars:[...stuff.cars, 'Mitsubishi']};
let newState = {people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars:[...stuff.cars, 'Mitsubishi']}};

console.log('state', state);
console.log('newPeople', newPeople);
console.log('newStuff', newStuff);
console.log('newState', newState);
