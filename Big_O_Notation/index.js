// Big O tells us how fast or slow an algorithm grows as input size increases.

// How much time an algorithm takes (Time Complexity)
// How much memory it uses (Space Complexity)

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));