// PROBLEM: Reverse Each Word in a String

function reverseEachWord(str) {
  return str
    .trim()
    .split(/\s+/)                        
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

// Test Cases
console.log(reverseEachWord("hello world"));          // "olleh dlrow"
console.log(reverseEachWord("  DSA is fun  "));       // "ASD si nuf"
console.log(reverseEachWord("JavaScript Rocks"));     // "tpircSavaJ skcoR"
console.log(reverseEachWord("a bc def"));             // "a cb fed"
console.log(reverseEachWord("Amar deep"));                      // "ramA peed"