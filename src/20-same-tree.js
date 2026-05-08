function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);

const q = new TreeNode(1);
q.left = new TreeNode(1);
q.right = new TreeNode(2);

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

module.exports = { isSameTree };

console.log(isSameTree(p, q));
