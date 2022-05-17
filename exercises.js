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

/*
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

console.log("--------------------------");

*/

/////////////////////////////////////////

const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];

const displayColors = function (arr) {
  const o = ["th", "st", "nd", "rd"];

  for (i = 0; i <= arr.length - 1; i++) {
    if (i === 0) {
      console.log(`1${o[1]} choice is ${arr[0]}.`);
    }
    if (i === 1) {
      console.log(`2${o[2]} choice is ${arr[1]}.`);
    }
    if (i === 2) {
      console.log(`3${o[3]} choice is ${arr[2]}.`);
    }
    if (i > 2) {
      console.log(`${i + 1}${o[0]} choice is ${arr[i]}.`);
    }
  }
};

displayColors(color);

console.log("--------------------------");

/////////////////////////////////////////

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const sumMatchingIndexes = function (arr1, arr2) {
  const helper = {};

  for (i = 0; i <= arr1.length - 1; i++) {
    helper[i] = arr1[i];
  }

  for (i = 0; i <= arr2.length - 1; i++) {
    helper[i] ? (helper[i] = helper[i] + arr2[i]) : (helper[i] = arr2[i]);
  }

  console.log(helper);
  console.log(Object.values(helper));
  return Object.values(helper);
};

sumMatchingIndexes(array1, array2);

console.log("--------------------------");

/////////////////////////////////////////

const arrToUnion1 = [1, 2, 3];
const arrToUnion2 = [100, 2, 1, 10];

const union = function () {
  const unionedArr = [...arrToUnion1, ...arrToUnion2];
  const noDuplicatesArr = [...new Set(unionedArr)];
  const finalArr = noDuplicatesArr.sort((a, b) => a - b);
  console.log(finalArr);

  return finalArr;
};

union(arrToUnion1, arrToUnion2);

console.log("--------------------------");

/////////////////////////////////////////

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [1, [2], [3, [[4]]], [5, 6]];

const difference = function (arrA, arrB) {
  let differenceArr = [];
  for (i = 0; i <= arrA.length - 1; i++) {
    if (!arrB.includes(arrA[i])) {
      differenceArr.push(arrA[i]);
    }
  }

  for (i = 0; i <= arrB.length - 1; i++) {
    if (!arrA.includes(arrB[i])) {
      differenceArr.push(arrB[i]);
    }
  }

  differenceArr.sort((a, b) => a - b);
  console.log(differenceArr);
};

difference(arr1, arr2);
difference(arr3, arr4);

console.log("--------------------------");

/////////////////////////////////////////

const testArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

const removeSomeFromArr = function (arr) {
  const forbidden = [null, 0, "", false, undefined, NaN];

  for (i = 0; i <= forbidden.length - 1; i++) {
    console.log("arr", arr);
    if (arr.includes(forbidden[i])) {
      const index = arr.indexOf(forbidden[i]);
      console.log("index", index);
      console.log(arr[index]);
      arr.splice(index, 1);
    }
  }
  console.log(arr);
  return arr;
};

removeSomeFromArr(testArr);

console.log("--------------------------");

/////////////////////////////////////////

const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

const sort = function (arr) {
  let titles = [];
  let sortedTitles = [];

  for (i = 0; i <= arr.length - 1; i++) {
    titles.push(arr[i].title);
    sortedTitles = titles.sort();
  }

  console.log(sortedTitles);
  const newLibrary = [];

  for (i = 0; i <= sortedTitles.length - 1; i++) {
    for (j = 0; j <= arr.length - 1; j++) {
      // console.log(i, j);
      if (sortedTitles[i].includes(arr[j].title)) {
        // console.log("IT'S A MATCH!", i, j);
        const index = j;
        newLibrary.push(arr[index]);
      }
    }
  }
  console.log("newLibrary", newLibrary);
};

sort(library);

console.log("--------------------------");

/////////////////////////////////////////

const testArr2 = [10, 20, 10, 40, 50, 60, 70];

const findPairWhichGivesTheTargetSum = function (arr, target) {
  let output = [];
  for (i = 0; i <= arr.length - 1; i++) {
    for (j = 0; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        output.push(i, j);
        console.log("output.length", output.length);
      }
    }
    if (output.length === 2) {
      break;
    }
  }
  console.log("output", output);
  return output;
};

findPairWhichGivesTheTargetSum(testArr2, 50);

console.log("--------------------------");

/////////////////////////////////////////

const giveEveryNLetterInAlphabet = function (letter1, letter2, n) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (!alphabet.includes(letter1) || !alphabet.includes(letter2)) {
    console.log(
      "Please insert a valid letter of the alphabet as starting and ending point."
    );
    return;
  }

  const index1 = alphabet.indexOf(letter1);
  const index2 = alphabet.indexOf(letter2);

  const rangeOfAlphabet = alphabet.slice(index1, index2 + 1);
  console.log("rangeOfAlphabet", rangeOfAlphabet);

  let answer = [];

  for (i = 0; i <= rangeOfAlphabet.length - 1; i++) {
    if (i % n === 0) {
      answer.push(rangeOfAlphabet[i]);
    }
  }
  console.log(answer);
  return answer;
};

giveEveryNLetterInAlphabet("a", "z", 2);
giveEveryNLetterInAlphabet("d", "m", 2);
giveEveryNLetterInAlphabet("d", "m", 3);

console.log("--------------------------");

/////////////////////////////////////////

const array4 = [1, 2, 3];
const array5 = [2, 30, 1];

const margeTwoArrays = function (arr1, arr2) {
  let finalArr = [];

  finalArr.push(...arr1);

  for (i = 0; i <= arr2.length - 1; i++) {
    if (!finalArr.includes(arr2[i])) {
      finalArr.push(arr2[i]);
    }
  }

  console.log("finalArr", finalArr);
  return finalArr;
};

margeTwoArrays(array4, array5);

console.log("--------------------------");

/////////////////////////////////////////

const array6 = [2, 5, 9, "ala", "butter", 12];

const removeSpecificElFromArr = function (arr, el) {
  if (!arr.includes(el)) {
    console.log("The given array doesn't include the given element.");
    return;
  }

  const index = arr.indexOf(el);
  const newArr = [...arr];

  newArr.splice(index, 1);

  console.log("newArr", newArr);
  return newArr;
};

removeSpecificElFromArr(array6, 9);
removeSpecificElFromArr(array6, "butter");
removeSpecificElFromArr(array6, 28);

console.log("--------------------------");

/////////////////////////////////////////

const array7 = [43, 56, 23, 89, 88, 90, 99, 652];

const findTheNthLargestElement = function (arr, n) {
  const newArr = [...arr];
  const sortedArr = newArr.sort((a, b) => a - b);
  console.log("sortedArr", sortedArr);

  const nthElement = sortedArr.slice(-n, -n + 1);
  console.log("nthElement", nthElement);
  return nthElement;
};

findTheNthLargestElement(array7, 4);
findTheNthLargestElement(array7, 6);

console.log("--------------------------");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const deleteKey = function (object, key) {
  const newObject = { ...object };
  console.log("newObject", newObject);

  delete newObject[key];

  console.log("newObject after delete", newObject);
};

deleteKey(student, "rollno");

console.log("--------------------------");

/////////////////////////////////////////

const bookLibrary = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const displayTheReadingStatus = function (arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i].readingStatus) {
      console.log(
        `You have already read: "${arr[i].title}" by ${arr[i].author}.`
      );
    }
    if (!arr[i].readingStatus) {
      console.log(
        `You still want to read: "${arr[i].title}" by ${arr[i].author}.`
      );
    }
  }
};

displayTheReadingStatus(bookLibrary);

console.log("--------------------------");

/////////////////////////////////////////

const Cylinder = class {
  constructor(r, h) {
    this.r = r;
    this.h = h;
  }
  volume() {
    return 3.1415 * Math.pow(this.r, 2) * this.h;
  }
};

const cylinder1 = new Cylinder(5, 12);

const getCylindersVolume = function (Cylinder) {
  console.log(Cylinder.volume());
  return Cylinder.volume();
};

getCylindersVolume(cylinder1);

console.log("--------------------------");

/////////////////////////////////////////

// const testData = 'dog'

// const giveSubsetOfAString = function (string) {
//   let output = [];
//   for (i=0; i<= string.length -1; i++) {
//     output.push(string.slice(0, i+1))
//   }
// }

console.log("--------------------------");

/////////////////////////////////////////

const clock = function () {
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    console.log(date);
  }, 1000);
};

// clock();

console.log("--------------------------");

/////////////////////////////////////////

const Circle = class {
  constructor(r) {
    this.r = r;
  }

  area() {
    return 3.1415 * Math.pow(this.r, 2);
  }

  perimeter() {
    return 3.1415 * 2 * this.r;
  }
};

const circle1 = new Circle(10);
const circle2 = new Circle(128);

const area1 = circle1.area();
const perimeter1 = circle1.perimeter();

const area2 = circle2.area();
const perimeter2 = circle2.perimeter();

console.log("circle1", circle1);
console.log("circle2", circle2);

console.log("area1", area1);
console.log("perimeter1", perimeter1);

console.log("area2", area2);
console.log("perimeter2", perimeter2);

console.log("--------------------------");

/////////////////////////////////////////

const parseAnUrl = function () {
  const url = window.location.href;
  console.log(url);
};

parseAnUrl();

console.log("--------------------------");

/////////////////////////////////////////

const testObject = {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true,
};

const getKeyValuePairs = function (object) {
  console.log(Object.entries(object));
  return Object.entries(object);
};

getKeyValuePairs(testObject);

console.log("--------------------------");

/////////////////////////////////////////

const testObject2 = {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true,
};

const swapKeysAndValues = function (object) {
  const entries = Object.entries(object);

  for (i = 0; i <= entries.length - 1; i++) {
    entries[i].reverse();
  }
  console.log("reversed entries", entries);
  const newObject = Object.fromEntries(entries);
  console.log("newObject", newObject);
  return newObject;
};

swapKeysAndValues(testObject2);

console.log("--------------------------");

/////////////////////////////////////////

const testObject3 = {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true,
};

const checkIfObjContainsProperty = function (object, property) {
  const keys = Object.keys(object);
  if (keys.includes(property)) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

checkIfObjContainsProperty(testObject3, "title");
checkIfObjContainsProperty(testObject3, "ISBN");

console.log("--------------------------");

/////////////////////////////////////////

const checkIfPalindrome = function (string) {
  let reversedString = "";
  for (i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }

  if (reversedString === string) {
    console.log(true, `This string IS a palindrom.`);
  } else {
    console.log(false, `This string IS NOT a palindrom.`);
  }
};

checkIfPalindrome("kayak");
checkIfPalindrome("2022");
checkIfPalindrome("2002");
checkIfPalindrome("butter");

console.log("--------------------------");

/////////////////////////////////////////

const returnStringInAlphabeticalOrder = function (string) {
  let helperArr = [];
  for (i = 0; i <= string.length - 1; i++) {
    helperArr.push(string[i]);
  }
  const sortedHelperArr = helperArr.sort();
  let result = "";
  for (i = 0; i <= sortedHelperArr.length - 1; i++) {
    result = result + sortedHelperArr[i];
  }

  console.log(result);
  return result;
};

const testString1 = "webmaster";
const testString2 = "szyszok-szyszek";

returnStringInAlphabeticalOrder(testString1);
returnStringInAlphabeticalOrder(testString2);

console.log("--------------------------");

/////////////////////////////////////////

const testString3 = "Web Development Tutorial";
const testString4 = "Szysio Szyszokowski Szyszek to Mysio Mysiokowski Myszek";

const findTheLongestWord = function (string) {
  const helperArr = string.split(" ");
  console.log(helperArr);

  let helperObj = {
    length: 0,
    index: null,
  };

  for (i = 0; i <= helperArr.length - 1; i++) {
    if (helperObj.length < helperArr[i].length) {
      helperObj.length = helperArr[i].length;
      helperObj.index = i;
    }
  }
  console.log("helperObj", helperObj);
  const output = helperArr[helperObj.index];
  console.log(output);
  return output;
};

findTheLongestWord(testString3);
findTheLongestWord(testString4);

console.log("--------------------------");

/////////////////////////////////////////

const testString6 = "Szyszok Szyszek to Mały Myszek";
const testString7 = "Lusia Pimpusia";

const countVowels = function (string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowels = null;
  for (i = 0; i <= string.length - 1; i++) {
    if (vowels.includes(string[i])) {
      numberOfVowels++;
    }
  }
  console.log(numberOfVowels);
  return numberOfVowels;
};

countVowels(testString6);
countVowels(testString7);

console.log("--------------------------");

/////////////////////////////////////////

const checkIfPrime = function (n) {
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i);
      console.log(false, `The given number: ${n} is not prime.`);
      return;
    }
  }

  console.log(true, `The given number: ${n} is prime.`);
};

checkIfPrime(17);
checkIfPrime(15);
checkIfPrime(37);

console.log("--------------------------");

/////////////////////////////////////////
