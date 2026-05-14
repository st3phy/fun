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
const preorderTraversal = root => {
    const stack = [];
    const result = [];
    let node = root;

    while (node !== null || stack.length > 0) {
        // Go as far left as possible
        while (node !== null) {
            // Add current node value to results array
            result.push(node.val);

            // Add current node to stack
            stack.push(node);

            // Go left
            node = node.left;
        }

        // Get previous node from stack
        node = stack.pop();

        // Go right
        node = node.right;
    }

    return result;
};

module.exports = { preorderTraversal };

console.log(preorderTraversal(root2));
