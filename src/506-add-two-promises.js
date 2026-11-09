/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @returns {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let a = await promise1;
    let b = await promise2;
    return a + b;
};

module.exports = { addTwoPromises };

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
