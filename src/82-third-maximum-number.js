/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
    let first, second, third;

    for (const num of nums) {
        // If the number is a duplicate, continue to next number
        if (num === first || num === second || num === third) continue;

        // If the biggest number is undefined or current number is bigger or equal to it than it
        if (first === undefined || num >= first) {
            // The third biggest number gets the value of the second biggest
            third = second;
            // The second biggets gets the value of the first biggest
            second = first;
            // The biggest number gets the value of current number
            first = num;
        }
        // Else if the second biggest number is undefined or current number is bigger or equal to it than it
        else if (second === undefined || num >= second) {
            third = second;
            second = num;
        }
        // Else if the third biggest number is undefined or current number is bigger or equal to it than it
        else if (third === undefined || num >= third) {
            third = num;
        }
    }

    // Returned third biggest number of the first biggest if third is undefined
    return third ?? first;
};

module.exports = { thirdMax };

console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
