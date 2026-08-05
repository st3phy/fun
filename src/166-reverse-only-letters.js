/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = s => {
    // 2 pointer approach
    let left = 0;
    let right = s.length - 1;

    const arr = s.split("");

    // Function to check if a char is a letter
    const isLetter = char => {
        return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
    };

    while (left < right) {
        // If left char is not a letter, skip it
        if (!isLetter(arr[left])) {
            left++;
        }
        // If right char is not a ltter, skip it
        else if (!isLetter(arr[right])) {
            right--;
        }
        // If both chars are letters, swap them and move on
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
};

module.exports = { reverseOnlyLetters };

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
