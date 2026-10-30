/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
const minNumberOfHours = (initialEnergy, initialExperience, energy, experience) => {
    const oponentEnergy = energy.reduce((sum, val) => sum + val, 0);
    neededEnergy = oponentEnergy >= initialEnergy ? oponentEnergy - initialEnergy + 1 : 0;

    let neededExperience = 0;

    for (const oponentExperience of experience) {
        if (initialExperience <= oponentExperience) {
            const add = oponentExperience - initialExperience + 1;
            neededExperience += add;
            initialExperience += add;
        }
        initialExperience += oponentExperience;
    }

    return neededEnergy + neededExperience;
};

module.exports = { minNumberOfHours };

console.log(minNumberOfHours(5, 1, [1, 3, 3], [1, 3, 7]));
