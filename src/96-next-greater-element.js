/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
    // // Create a map which will hold every number from nums2 and its first greater element if it has one
    // const map = new Map();

    // for (let i = 0; i < nums2.length; i++) {
    //     for (let j = i + 1; j < nums2.length; j++) {
    //         if (nums2[j] > nums2[i]) {
    //             map.set(nums2[i], nums2[j]);
    //             break;
    //         }
    //     }
    // }

    // // Go through nums1 and create the results array in place
    // for (let i = 0; i < nums1.length; i++) {
    //     nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    // }

    // return nums1;

    // Monotonic decreasing stack solution (a stack, decreasing from bottom to top) - time complexity O(n+m)
    const stack = [];
    const map = new Map();
    const res = [];

    // Go through nums2
    for (const num of nums2) {
        // While the top element in stack is smaller than num
        while (stack.length && stack[stack.length - 1] < num) {
            // We found a greater number so pop the top element from stack and add it to the map
            map.set(stack.pop(), num);
        }
        // Add current number to stack
        stack.push(num);
    }

    // For every number in nums1, go through map and see if it has a greater element
    for (const num of nums1) {
        res.push(map.has(num) ? map.get(num) : -1);
    }

    return res;
};

module.exports = { nextGreaterElement };

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
