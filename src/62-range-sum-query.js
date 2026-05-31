/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    // Save sum of previous elements on every position of nums - called a prefix sum
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }

    // In the end, this.nums[i] = sum of elements from index 0 to i
    this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    // If the first value is zero, the result is stored in nums[right]
    if (left === 0) {
        return this.nums[right];
    }
    return this.nums[right] - this.nums[left - 1];
};

// Your NumArray object will be instantiated and called as such:
let myArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(myArr.sumRange(0, 2));
console.log(myArr.sumRange(2, 5));
console.log(myArr.sumRange(0, 5));
