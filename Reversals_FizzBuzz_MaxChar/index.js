
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

// Challenge 3: reverse and integer

function reverseInt(int) {

  const strInt = int.toString();
  let reversed = '';

  for (integer of strInt) {
    reversed = integer + reversed
  }

  return parseInt(reversed)

}

const output = reverseInt(123456);

console.log(output)
