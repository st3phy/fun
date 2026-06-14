function _Node(val, children) {
    this.val = val === undefined ? null : val;
    this.children = children === undefined ? null : children;
}

const root = new _Node(1, [new _Node(3, [new _Node(5, []), new _Node(6, [])]), new _Node(2, []), new _Node(4, [])]);

/**
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth = root => {
    if (root === null) return 0;

    let depth = 0;

    for (const child of root.children) {
        depth = Math.max(depth, maxDepth(child));
    }

    return depth + 1;
};

module.exports = { maxDepth };

console.log(maxDepth(root));
