function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right = new TreeNode(3);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(3);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = root => {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        // Get current node
        const node = stack.pop();

        // Add current node value to results array
        result.push(node.val);

        // Add left node
        if (node.left) stack.push(node.left);

        // Add right node to stack
        if (node.right) stack.push(node.right);
    }

    return result.reverse();
};

module.exports = { postorderTraversal };

console.log(postorderTraversal(root));
