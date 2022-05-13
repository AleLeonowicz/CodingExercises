// Question 3.

// const addTwoNumbers = function (a, b) {
//   return a + b;
// };

// const test = addTwoNumbers(2, 5);

// console.log(test);

/////

// const addNumbers = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// const test2 = addNumbers(2)(5);
// console.log(test2);

//////////////////////////////////////

// Question 4.
// const sentence = "i'm a lasagna hog".split("").reverse().join("");
// console.log(sentence);

//////////////////////////////////////

// Question 6.
// var foo = "Hello";
// (function () {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

/////////////////////////////////////

// const foo = { n: 1 };
// const bar = foo;
// foo.x = foo = { n: 2 };

// console.log("foo.x", foo.x);

////////////////////////////////////
// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("three");
// });
// console.log("four");

////////////////////////////////////

// (function () {
//   var a = (b = 3);
// })();

// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));

/////////////////////////////////////////////////////////////////////

const isArray = function (input) {
  typeof input === "object"
    ? input.constructor === Array
      ? console.log(true)
      : console.log(false)
    : console.log(false, "It is not even an object!");
};

isArray("Szyszok Myszek");
isArray([1, 2, 4, 0]);
isArray(true);
isArray(false);
isArray({
  n: 1,
});

console.log("--------------------------");

////////////////////////////////////////

const cloneArray = function (arr) {
  return [...arr];
};

const clonedArr1 = cloneArray([1, 2, 4, 0]);
const clonedArr2 = cloneArray([1, 2, [4, 0]]);

console.log(clonedArr1, clonedArr2);

console.log("--------------------------");

///////////////////////////////////////

const returnNElementsFromArr = function (arr, n = 1) {
  let newArr = [];
  if (n < 1) {
    return newArr;
  }
  for (i = 1; i <= n && i <= arr.length; i++) {
    newArr.push(arr[i - 1]);
  }
  return newArr;
};

console.log(returnNElementsFromArr([7, 9, 0, -2]));
console.log(returnNElementsFromArr([], 3));
console.log(returnNElementsFromArr([7, 9, 0, -2], 3));
console.log(returnNElementsFromArr([7, 9, 0, -2], 6));
console.log(returnNElementsFromArr([7, 9, 0, -2], -3));

console.log("--------------------------");

/////////////////////////////////////////

const returnLastNElementsFromArr = function (arr, n = 1) {
  let newArr = [];
  if (n < 1) {
    return newArr;
  } else {
    for (i = 1; i <= n && i <= arr.length; i++) {
      newArr.push(arr[arr.length - 1 - (i - 1)]);
    }
    return newArr.reverse();
  }
};

console.log(returnLastNElementsFromArr([7, 9, 0, -2]));
console.log(returnLastNElementsFromArr([7, 9, 0, -2], 3));
console.log(returnLastNElementsFromArr([7, 9, 0, -2], 6));

console.log("--------------------------");

/////////////////////////////////////////

const makeArrIntoAString = function (arr) {
  const line1 = [...arr].join(",");
  const line2 = [...arr].join(",");
  const line3 = [...arr].join("+");
  console.log(line1);
  console.log(line2);
  console.log(line3);
};

makeArrIntoAString(["Red", "Green", "White", "Black"]);

console.log("--------------------------");

/////////////////////////////////////////

const array = [1, 1, 2, 3, 4, 5, 5];

const getSet = (arr) => {
  let newArr = [];
  for (i = 0; i <= arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(getSet(array));
