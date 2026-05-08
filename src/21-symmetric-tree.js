function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.right = new TreeNode(3);
root1.right.right = new TreeNode(3);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = root => {
    const isMirror = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;

        return isMirror(p.left, q.right) && isMirror(p.right, q.left);
    };

    return isMirror(root.left, root.right);
};

module.exports = { isSymmetric };

console.log(isSymmetric(root));
