function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
const root2 = new TreeNode(1);

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;

    const sumLeft = node => {
        // Stop recursion when a node null is reached
        if (!node) {
            return;
        }
        // If there is a left node and it is a leaf, add to sum
        if (node.left && node.left.left === null && node.left.right === null) {
            sum += node.left.val;
        }

        // Go left, then right to traverse entire tree
        sumLeft(node.left);
        sumLeft(node.right);
    };

    sumLeft(root);

    return sum;
};

module.exports = { sumOfLeftLeaves };

console.log(sumOfLeftLeaves(root));
