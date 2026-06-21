/**
 * @param {number} k
 * @param {number[]} nums
 */
KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums;
    nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    // Place value in this.nums so that array remains sorted
    let left = 0;
    let right = this.nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (val > this.nums[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    // Val needs to be place at index "left";
    this.nums.splice(left, 0, val);

    return this.nums[this.nums.length - this.k];
};

module.exports = { KthLargest };

var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));
