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

console.log("--------------------------");

/////////////////////////////////////////

const exampleNr = 254680;

const insertSignBetweenEvenNumbers = function (number) {
  const nrToString = number.toString();
  let newArr = [];

  for (i = 1; i <= nrToString.length; i++) {
    if (
      +nrToString.slice(i - 1, i) % 2 === 0 &&
      +nrToString.slice(i, i + 1) % 2 === 0 &&
      i + 1 <= nrToString.length
    ) {
      newArr.push(nrToString.slice(i - 1, i));
      newArr.push("-");
    } else {
      newArr.push(nrToString.slice(i - 1, i));
    }
  }
  return newArr.join("");
};

console.log(insertSignBetweenEvenNumbers(exampleNr));

const insertSignBetweenEvenNumbers2 = function (number) {
  const nrToString = number.toString();
  let newArr = [];

  for (i = 0; i <= nrToString.length; i++) {
    if (i !== 0 && nrToString[i] % 2 === 0 && nrToString[i - 1] % 2 === 0) {
      console.log("current", nrToString[i]);
      console.log("previous", nrToString[i - 1]);
    }
  }
  return newArr.join("");
};

console.log(insertSignBetweenEvenNumbers2(exampleNr));

console.log("--------------------------");

/////////////////////////////////////////

const testArr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];

// const sortArr = function (arr) {
//   let sortedArr = [];
//   sortedArr.push(arr[0]);

//   for (i = 1; i <= arr.length - 1; i++) {
//     if (arr[i] < sortedArr[0]) {
//       sortedArr.unshift(arr[i]);
//     }
//     if (arr[i] > sortedArr[0]) {
//       sortedArr.push(arr[i]);
//     }
//   }
//   return sortedArr;
// };

const sortArr = function (arr) {
  newArr = [...arr];
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
};

console.log(sortArr(testArr1));
console.log(testArr1);

console.log("--------------------------");

/////////////////////////////////////////

const testArr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const findMostFrequentElement = function (arr) {
  const helper = {};

  arr.forEach((el) => {
    helper[el] ? (helper[el] = helper[el] + 1) : (helper[el] = 1);
  });

  const helpersValues = Object.values(helper);
  const max = Math.max(...helpersValues);
  const index = helpersValues.indexOf(max);

  const helpersKeys = Object.keys(helper);
  const answer = helpersKeys[index];
  console.log("answer", answer);
  return answer;
};

findMostFrequentElement(testArr2);

console.log("--------------------------");

/////////////////////////////////////////

const testString1 = "The Quick Brown Fox";

const swapCaseInString = function (string) {
  let newString = "";
  for (i = 0; i <= string.length - 1; i++) {
    string[i] === string[i].toLowerCase()
      ? (newString = newString + string[i].toUpperCase())
      : (newString = newString + string[i].toLowerCase());
  }
  console.log("newString", newString);
  return newString;
};

swapCaseInString(testString1);

console.log("--------------------------");

/////////////////////////////////////////

const testArr3 = [3, 8, 7, 6, 5, -4, -3, 2, 1];

const giveSumAndProduct = function (arr) {
  const sumAndProduct = {};

  const sum = arr.reduce((cur, sum) => cur + sum, 0);
  sumAndProduct.sum = sum;

  console.log(sumAndProduct);

  const product = arr.reduce((cur, product) => cur * product);
  sumAndProduct.product = product;

  console.log(sumAndProduct);
};

giveSumAndProduct(testArr3);

console.log("--------------------------");

/////////////////////////////////////////

const testArr4 = [
  3,
  "alA",
  "aLA",
  "Ala",
  2,
  "ala",
  3,
  "AlA",
  3,
  "ALA",
  2,
  4,
  9,
  3,
  "ala",
];

const removeDuplicates = function (arr) {
  let lowerCaseArr = [];
  let newArr = [];

  for (i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === "string") {
      lowerCaseArr.push(arr[i].toLowerCase());
    } else {
      lowerCaseArr.push(arr[i]);
    }
    if (!newArr.includes(lowerCaseArr[i])) {
      newArr.push(lowerCaseArr[i]);
    }
  }
  console.log("newArr", newArr);
  return newArr;
};

removeDuplicates(testArr4);
