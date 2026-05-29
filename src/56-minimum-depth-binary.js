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

const root2 = new TreeNode(2);
root2.right = new TreeNode(3);
root2.right.right = new TreeNode(4);
root2.right.right.right = new TreeNode(5);
root2.right.right.right.right = new TreeNode(6);

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;

    // If no left child, must go right
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    // If no right child, must go left
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    // Both children exist
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

module.exports = { minDepth };

console.log(minDepth(root2));
