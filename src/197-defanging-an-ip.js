/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => {
    return address.split(".").join("[.]");
};

module.exports = { defangIPaddr };

console.log(defangIPaddr("255.100.50.0"));
