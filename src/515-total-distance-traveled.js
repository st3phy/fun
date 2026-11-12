/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @returns {number}
 */
const distanceTraveled = (mainTank, additionalTank) => {
    // Every 5 liters we transfer 1 liter from the additional tank
    // Each transfer costs the main tank a net of 4 liters (-5+1)
    const transfer = Math.min(additionalTank, Math.floor((mainTank - 1) / 4));

    return (transfer + mainTank) * 10;
};

module.exports = { distanceTraveled };

console.log(distanceTraveled(5, 10));
