/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = obj => {
    return Object.keys(obj).length === 0;
};

module.exports = { isEmpty };

console.log(isEmpty([1, 2]));
