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
    let order = [];

    const pass = root => {
        // If at an end node, return
        if (root === null) {
            return;
        }

        // Go left
        pass(root.left);

        // Go right
        pass(root.right);

        // Save node value
        order.push(root.val);
    };

    pass(root);
    return order;
};

module.exports = { postorderTraversal };

console.log(postorderTraversal(root));
