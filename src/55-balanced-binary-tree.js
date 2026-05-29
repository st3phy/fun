function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(4);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
    const checkBalance = root => {
        if (root === null) {
            return 0;
        }

        // Go left
        const left = checkBalance(root.left);
        // If the left node is unbalanced, return -1
        if (left === -1) return -1;

        // Go right
        const right = checkBalance(root.right);
        // If the right node is unbalanced, return -1
        if (right === -1) return -1;

        // If difference between left and right is more than one, the tree is unbalanced
        if (Math.abs(left - right) > 1) return -1;

        // Increment depth
        return Math.max(left, right) + 1;
    };

    // If balance is -1, the tree is unbalanced
    return checkBalance(root) !== -1;
};

module.exports = { isBalanced };

console.log(isBalanced(root));
