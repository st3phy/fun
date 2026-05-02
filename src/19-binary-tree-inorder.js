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
    let res = [];

    let recursiveRes = root => {
        if (root === null) {
            return;
        }

        recursiveRes(root.left);
        res.push(root.val);
        recursiveRes(root.right);
    };

    recursiveRes(root);
    return res;
};

module.exports = { inorderTraversal };

console.log(inorderTraversal(root2));
