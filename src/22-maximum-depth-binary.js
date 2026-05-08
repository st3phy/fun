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
root.right.right.right = new TreeNode(7);

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

module.exports = { maxDepth };

console.log(maxDepth(root));
