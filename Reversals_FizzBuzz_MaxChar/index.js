
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {

  const reversed = []

  //unshift adds elements to beginning of an array
  for (let i = 0; i < str.length; i++) {
    reversed.unshift(str[i]);
  }

  return reversed.join("");

}

const output = reverseString('hello hi')

console.log(output)