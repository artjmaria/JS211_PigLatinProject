'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ============================================================================================

const pigLatin = (word) => {

  // Your code here


  // (Const Variable that addresses last test - It trims off white space and sets letters to lower case)
  const trimAndLowerCaseWord = word.trim().toLowerCase()

  // (Const Variable to hold pig latin vowels)
  const pLatinvowels = ['a', 'e', 'i', 'o', 'u', 'y']

  // (Let Variable that creates an array and with trimmed and lower cased words)   
  let phraseArr = Array.from(trimAndLowerCaseWord)

  // (Conditional statements used to meet tests listed below)

  // (Attaches "yay" if word begins with vowel)
  if (pLatinvowels.includes(phraseArr[0])) {
    phraseArr.push('y', 'a', 'y')

    // (Returns string)
    return phraseArr.join('')

  } else {

    // (Loops through an array to see if index i is a vowel, where the vowels need to be moved to the end of the word and followed by 'ay')

    for (let i = 0; i < phraseArr.length; i++) {
      if (pLatinvowels.indexOf(phraseArr[i]) > -1) {
        phraseArr = phraseArr.concat(phraseArr.splice(0, i))
        phraseArr.push('a', 'y')

        // (Returns string)
        return phraseArr.join('')
      }
    }
  }
}

// ============================================================================================

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.