/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
const categorizeBox = (length, width, height, mass) => {
    const volume = length * width * height;
    const isBulky = volume >= Math.pow(10, 9) || length >= 10000 || width >= 10000 || height >= 10000;
    const isHeavy = mass >= 100;

    if (isBulky) {
        if (isHeavy) return "Both";
        return "Bulky";
    } else {
        if (isHeavy) return "Heavy";
        return "Neither";
    }
};

module.exports = { categorizeBox };

console.log(categorizeBox(1000, 35, 700, 30));
