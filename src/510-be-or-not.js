/**
 * @param {string} val
 * @returns {Object}
 */
const expect = val => {
    const toBe = val2 => {
        if (val !== val2) throw new Error("Not Equal");
        return true;
    };

    const notToBe = val3 => {
        if (val === val3) throw new Error("Equal");
        return true;
    };

    return { toBe, notToBe };
};

module.exports = { expect };

console.log(expect(5).notToBe(5));
