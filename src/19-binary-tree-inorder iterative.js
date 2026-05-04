function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.left.right.left = new TreeNode(6);
root2.left.right.right = new TreeNode(7);
root2.right.right = new TreeNode(8);
root2.right.right.left = new TreeNode(9);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
    const res = [];
    const stack = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        // Go to left as far as possible
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        // Visit latest node
        curr = stack.pop();
        res.push(curr.val);

        // Go right
        curr = curr.right;
    }
    return res;
};

module.exports = { inorderTraversal };

console.log(inorderTraversal(root2));
