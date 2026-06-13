function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = root => {
    // // Traverse tree and add values in an array
    // const values = [];
    // const traverse = (node, values) => {
    //     if (node === null) return;
    //     traverse(node.left, values);
    //     traverse(node.right, values);
    //     values.push(node.val);
    // };
    // traverse(root, values);

    // // Sort values array ascending
    // values.sort((a, b) => a - b);

    // // Assume min as difference between first 2 values
    // let min = values[1] - values[0];
    // // Go through array and compare every 2 adjacent numbers
    // for (let i = 0; i < values.length - 1; i++) {
    //     // If the difference between curreny two adjacent numbers < min, min is the new value
    //     min = values[i + 1] - values[i] < min ? values[i + 1] - values[i] : min;
    // }

    // return min;

    let min = 100000;
    let prev = null;

    const traverse = node => {
        if (node === null) return;

        traverse(node.left);
        if (prev !== null) {
            min = Math.min(min, node.val - prev);
        }
        prev = node.val;
        traverse(node.right);
    };

    traverse(root);

    return min;
};

module.exports = { getMinimumDifference };

console.log(getMinimumDifference(root));
