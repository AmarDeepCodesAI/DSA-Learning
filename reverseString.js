/**
 * PROBLEM: Reverse Each Word in a String
 * 
 * - Trim extra spaces
 * - Split into words
 * - Reverse each word individually
 * - Join back with single space
 * 
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 */

function reverseEachWord(str) {
  return str
    .trim()
    .split(/\s+/)                        // multiple spaces handle karta hai
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

// ✅ Test Cases
console.log(reverseEachWord("hello world"));          // "olleh dlrow"
console.log(reverseEachWord("  DSA is fun  "));       // "ASD si nuf"
console.log(reverseEachWord("JavaScript Rocks"));     // "tpircSavaJ skcoR"
console.log(reverseEachWord("a bc def"));             // "a cb fed"