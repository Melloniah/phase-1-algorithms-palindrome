function isPalindrome(word) {
  // Write your algorithm here
const normalWord=word.toLowerCase(); // makes comparison case sensitive after converting it to lowecase

const reversedWord=normalWord.split('').reverse().join(''); //reverses the word and checks if its still the same

return reversedWord===normalWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I basically called the string and replaced it with empty so that any word can be used and made it accept even lowercase or uppercase.
  then I said, reversedWord is the same as the normalWord but the characters should be separated first, and put made new, then elements written in reverse order, then joined. eg help will be pleh
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));// true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));//false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));// true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));//false

 console.log("");

 console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));// true

}

module.exports = isPalindrome;
