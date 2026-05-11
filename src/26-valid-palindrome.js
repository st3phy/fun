/**
 *
 */
const isPalindrome = s => {
    // Keep only alphanumeric characters, lowercased, in a new array
    const arr = [];
    for (let i = 0, j = 0; i < s.length; i++) {
        // Get the charcode for current character
        const code = s.charCodeAt(i);

        // If we find an uppercase char
        if (code > 64 && code < 91) {
            // Save it in the array as lowercase
            arr[j++] = String.fromCharCode(code + 32);
        }

        // If we find a lowercase character or a numeric character
        else if ((code > 96 && code < 123) || (code > 47 && code < 58)) {
            // Add it to the array
            arr[j++] = s[i];
        }
    }

    // Check if array is palindrome
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

module.exports = { isPalindrome };

console.log(isPalindrome("A man, a plan, a canal: Panama"));
