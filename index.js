function isPalindrome(word) {
  // Write your algorithm here
  let originalWord = word.split("");
  let reservedWorld = [...originalWord].reverse();

  let isItPalindrome = true;

  for (let i = 0; i < originalWord.length; i++) {
    if (originalWord[i] !== reservedWorld[i]) {
      isItPalindrome = false;
    }
  }
  return isItPalindrome;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
