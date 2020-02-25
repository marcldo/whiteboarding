
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {

  const reversed = []

  //unshift adds elements to beginning of an array
  for (let i = 0; i < str.length; i++) {
    reversed.unshift(str[i]);
  }

  //returns string from array
  return reversed.join("");

};

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome false if not
// ex. isPalindrome('racecar') === true
function isPalindrome(str) {

  const reversed = [];

  for (let i = 0; i < str.length; i++) {
    reversed.unshift(str[i])
  };

  const revStr = reversed.join("")

  if (revStr === str) {
    return true;
  } else {
    return false;
  }

}

// Challenge 3: reverse an integer
function reverseInt(int) {

  const strInt = int.toString();
  let reversed = '';

  for (integer of strInt) {
    reversed = integer + reversed
  }

  return parseInt(reversed)

}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a  string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  //first letter is uppercase
  let capStr = str[0].toUpperCase()

  //loop at index 1 to account for first letter
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      capStr = capStr + str[i].toUpperCase()
    } else {
      capStr = capStr + str[i]
    }
  }

  return capStr
}


// CHALLENGE 5: MAX CHARACTER
// Return a the most common character in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

}

// CHALLENGE 6: FIZZBUZZ
// prints all numbers from 1 to 100. For multiples of 3 print "Fizz"
// for multiples of 5 print "Buzz". For numbers which are both 3 and 5, print "FizzBuzz"
function fizzBuzz() {

}

const output = capitalizeLetters("i love javascript");

console.log(output)
