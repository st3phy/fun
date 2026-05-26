function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    // No more elements in array
    if (nums.length === 0) {
        return null;
    }

    // The middle value of the array will become a new node
    const middle = Math.floor(nums.length / 2);
    const myTree = new TreeNode(nums[middle]);

    // Go left with the left side of array and right with the right side
    myTree.left = sortedArrayToBST(nums.slice(0, middle));
    myTree.right = sortedArrayToBST(nums.slice(middle + 1));

    return myTree;
};

module.exports = { sortedArrayToBST };

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
