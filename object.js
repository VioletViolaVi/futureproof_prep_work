document.addEventListener("DOMContentLoaded", () => {
  /********************************************************************************************** Q1. */
  console.log("Object:");
  console.log("Q1.");

  // write an object that describes you
  // the object could include your name, your age etc.

  function me() {
    const aboutMe = {
      name: "Vivian",
      age: 28,
      favFood: "pizza",
    };

    return aboutMe;
  }
  console.log(me());

  /********************************************************************************************** Q2. */
  console.log("\n");
  console.log("Q2.");

  // Time to combine all the efforts made in starter and array.
  // Complete the info function that takes in an array
  // and returns information about the array

  // Complete the function below

  const info = (arr) => {
    // average
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      const singleNum = arr[i];
      total += singleNum;
    }
    const averageSum = total / arr.length;

    // even nums
    let evenCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      const singleNum = arr[i];
      if (singleNum % 2 === 0) {
        evenCounter++;
      }
    }

    // odd nums
    let oddCounter = 0;
    arr.forEach((singleNum) => {
      if (singleNum % 2 !== 0) {
        oddCounter++;
      }
    });

    // complete obj
    const fullObj = {
      array: arr,
      elements: arr.length,
      avg: averageSum,
      sum: total,
      howManyEvenNumbers: evenCounter,
      howManyOddNumbers: oddCounter,
    };

    return fullObj;
  };

  console.log(info([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  // When passed the array above the result should like it does below
  `
{
  array: [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ],
  elements: 9,
  avg: 5,
  sum: 45,
  howManyEvenNumbers: 4,
  howManyOddNumbers: 5
}
`;

  /********************************************************************************************** Q3. */
  console.log("\n");
  console.log("Q3.");

  // given an array of primitive types, i.e. int, string, number, booleans and numbers
  // Write a function diffTypes that will return an object (see example below)
  // => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }

  function diffTypes(arr) {
    let numCounter = 0;
    let objCounter = 0;
    let booleanCounter = 0;
    let arrCounter = 0;
    let strCounter = 0;

    arr.forEach((singleItem) => {
      switch (typeof singleItem) {
        case "number":
          numCounter++;
          break;
        case "object":
          objCounter++;
          break;
        case "boolean":
          booleanCounter++;
          break;
        case "array":
          arrCounter++;
          break;
        default:
          strCounter++;
          break;
      }
    });

    return {
      string: strCounter,
      array: arrCounter,
      boolean: booleanCounter,
      object: objCounter,
      number: numCounter,
    };
  }

  const ar = [
    1,
    "str",
    false,
    { name: "Romeo", age: 77 },
    ["a", "e", "i", "o", "u"],
    true,
  ];
  console.log(diffTypes(ar));
  // => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }

  console.log("\n");
});
