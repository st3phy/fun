/**
 * @param {string} s
 * @returns {number}
 */
const secondHighest = s => {
    let largest = -1;
    let secondLargest = -1;

    for (let char of s) {
        if (char >= "0" || char <= "9") {
            char = Number(char);

            if (char > largest) {
                secondLargest = largest;
                largest = char;
            } else if (char !== largest && char > secondLargest) {
                secondLargest = char;
            }
        }
    }

    return secondLargest;
};

module.exports = { secondHighest };

console.log(secondHighest("abc1111"));
