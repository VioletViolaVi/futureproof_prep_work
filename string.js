document.addEventListener("DOMContentLoaded", () => {
  /********************************************************************************************** Q1. */
  console.log("Q1.");

  // complete the function capitalize that takes in a word and returns a capitalised string

  // Complete the function below
  const capitalize = (word) => {
    // You will have to define the variable
    const firstLetter = word.slice(0, 1).toUpperCase();

    const remainingLetters = word.slice(1, word.length).toLowerCase();

    const capitalizedWord = `${firstLetter}${remainingLetters}`;

    return capitalizedWord;
  };

  console.log(capitalize("hELLo")); // => Hello
  console.log(capitalize("betH")); // => Beth
  console.log(capitalize("jaGaN")); // => Jagan
  console.log(capitalize("sergI")); // => Sergi

  /********************************************************************************************** Q2. */
  console.log("\n");
  console.log("Q2.");

  // complete the function swapcase that takes in a word and returns a swapcased string
  // the lowercase letters will be uppercased and vice versa

  // Complete the function below
  const swapcase = (word) => {
    let new_word = "";

    for (let i = 0; i < word.length; i++) {
      const singleItem = word[i];
      if (singleItem === singleItem.toLowerCase()) {
        new_word += singleItem.toUpperCase();
      } else {
        new_word += singleItem.toLowerCase();
      }
    }

    return new_word;
  };

  console.log(swapcase("hELLo")); // "HellO"
  console.log(swapcase("betH")); // "BETh"
  console.log(swapcase("jaGaN")); // "JAgAn"
  console.log(swapcase("sergI")); // "SERGi"

  /********************************************************************************************** Q3. */
  console.log("\n");
  console.log("Q3.");

  // complete the function camelCase that takes in a word and returns a camelCased string
  // the underscore will be removed and the letter that used to follow the underscore will be capitalised

  // Complete the function below
  const camelCase = (str) => {
    const indexOfCharAfterUnderScore = str.indexOf("_") + 1;

    const cameCased = str.replace(
      str[indexOfCharAfterUnderScore],
      str[indexOfCharAfterUnderScore].toUpperCase()
    );

    const removeUnderScore = cameCased.replace("_", "");

    const result = removeUnderScore;

    return result;
  };

  console.log(camelCase("snake_case")); // => snakeCase
  console.log(camelCase("a_variable")); // => aVariable

  /********************************************************************************************** Q4. */
  console.log("\n");
  console.log("Q4.");

  // complete the function snakeCase that takes in a word and returns a snake_cased string
  // the Capital letter will be downcased and preceded by and understore

  const snakeCase = (str) => {
    return result;
  };

  console.log(snakeCase("snakeCase")); // => snake_case
  console.log(snakeCase("aVariable")); // => a_variable

  /********************************************************************************************** Q5. */
  console.log("\n");
  console.log("Q5.");

  /********************************************************************************************** Q6. */
  console.log("\n");
  console.log("Q6.");
});
