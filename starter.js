document.addEventListener("DOMContentLoaded", () => {
  /********************************************************************************************** Q1. */
  console.log("Q1.");

  // Using the modulo operator
  // complete the function called even that takes in an integer
  // and returns (not console.log) a boolean

  // Complete the function below
  const even = (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log(even(3)); // => false
  console.log(even(4)); // => true

  /********************************************************************************************** Q2. */
  console.log("\n");
  console.log("Q2.");

  // Using the modulo operator
  // write a function called odd that takes in an integer
  // and returns (not console.log) a boolean

  // Write your function below

  const odd = (num) => {
    return num % 2 !== 0 ? true : false;
  };

  console.log(odd(3)); // => true
  console.log(odd(4)); // => false

  /********************************************************************************************** Q3. */
  console.log("\n");
  console.log("Q3.");

  // complete the function called howManyEvens that takes in an integer and returns (not console.log) how many even numbers are in the array

  // Complete the function below
  const howManyEvens = (arr) => {
    // You will need to define result
    evenNums = [];
    for (let i = 0; i < arr.length; i++) {
      const singleItem = arr[i];
      if (singleItem % 2 === 0) {
        evenNums.push(singleItem);
      }
    }
    const result = evenNums.length;
    return result;
  };

  ar = [7, 19, 33, -5, -99, 6, 12];
  console.log(howManyEvens(ar)); // =? 2

  /********************************************************************************************** Q4. */
  console.log("\n");
  console.log("Q4.");

  // write a function called howManyOdds that takes in an integer and returns (not console.log) how many odd numbers are in the array

  // Write your function below
  const howManyOdds = (arr) => {
    oddNums = [];
    for (let i = 0; i < arr.length; i++) {
      const singleItem = arr[i];
      if (singleItem % 2 !== 0) {
        oddNums.push(singleItem);
      }
    }
    const result = oddNums.length;
    return result;
  };

  ar = [7, 19, 33, -5, -99, 6, 12];

  console.log(howManyOdds(ar)); // => 5
});
