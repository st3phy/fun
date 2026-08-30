/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = nums => {
    const answer = [];

    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr = curr * 2 + nums[i];
        curr = curr % 5;
        answer.push(curr === 0);
    }

    return answer;
};

module.exports = { prefixesDivBy5 };

console.log(
    prefixesDivBy5([
        1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
        1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1
    ])
);
