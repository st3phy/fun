/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = s => {
    let largest = s.length;
    let smallest = 0;
    const result = [];

    for (let i = 0; i < s.length; i++) {
        // If we find "I", add the smallest possible integer
        if (s[i] === "I") {
            result.push(smallest);
            smallest++;
        }
        // If we find "D", add the biggest possible integer
        else {
            result.push(largest);
            largest--;
        }
    }

    // After last char, add the remaining integer which is equal to smallest as well as largest
    result.push(largest);

    return result;
};

module.exports = { diStringMatch };

console.log(diStringMatch("IDID"));
