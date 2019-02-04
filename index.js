// Arrays

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

const whileLoop = (arr) => {
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  }
}

const map = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

const filter = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) {newArr.push(arr[i]);}
  }
  return newArr;
}

const reduce = (arr, cb, newThing) => {
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

let state = {people:[...people], stuff:{...stuff}};

let newPeople = ['Garfield', ...people, 'Odie'];
const newStuff = {...stuff, cars:[...stuff.cars, 'Mustang']};
let newState = {people: ['Garfield', ...people, 'Odie'], stuff: {...stuff, cars:[...stuff.cars, 'Mustang']}};

console.log('state', state);
console.log('newPeople', newPeople);
console.log('newStuff', newStuff);
console.log('newState', newState);