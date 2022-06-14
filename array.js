document.addEventListener("DOMContentLoaded", () => {
  /********************************************************************************************** Q1. */
  console.log("Q1.");
  // complete the sum function that takes in an array
  // and returns (not console.log) the sum of its elements

  // Complete the function below
  const sum = (arr) => {
    let total = 0;

    arr.forEach((singleNum) => {
      total += singleNum;
    });

    return total;
  };

  ar = [7, 19, 33, -5, -99, 6, 12];
  console.log(sum(ar)); //=> -27

  /********************************************************************************************** Q2. */
  console.log("\n");
  console.log("Q2.");

  // complete the avg function that takes in an array
  // and returns (not console.log) the average (2 rounded digits)

  // Complete the function below
  const avg = (arr) => {
    let total = 0;

    arr.forEach((singleNum) => {
      total += singleNum;
    });

    const averageSum = (total / arr.length).toFixed(2);

    return averageSum;
  };

  ar = [7, 19, 33, -5, -99, 6, 12];
  console.log(avg(ar)); // => -3.86 (number)
});
