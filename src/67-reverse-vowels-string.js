/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
    // List of vowels
    const vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

    // Pointers starting from the left and right of string
    let left = 0;
    let right = s.length - 1;

    // Array to form new string since strings are immutable in JS
    const final = s.split("");

    while (left < right) {
        // Move right if we have no vowel on the left
        if (!vowels.has(s[left])) {
            left++;
        }
        // Move left if we have no vowel on the right
        if (!vowels.has(s[right])) {
            right--;
        }
        // If we found vowels on both  side, swap position and update pointers
        if (vowels.has(s[left]) && vowels.has(s[right])) {
            const aux = final[left];
            final[left] = final[right];
            final[right] = aux;
            left++;
            right--;
        }
    }

    return final.join("");
};

module.exports = { reverseVowels };
