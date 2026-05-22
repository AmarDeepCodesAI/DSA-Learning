function isPalindrome(str) {

    // Remove special chars and spaces
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse string
    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}


// Test Cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("madam")); // true