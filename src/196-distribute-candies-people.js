/**
 * @param {number} candies
 * @param {number} num_people
 * @return {numner[]}
 */
const distributeCandies = (candies, num_people) => {
    const ans = new Array(num_people).fill(0);
    let pass = 0;

    while (candies > 0) {
        for (let i = 0; i < num_people; i++) {
            if (candies > 0) {
                // Calculate how much the current person should receive
                const give = pass + i + 1;
                // If we still have enough candies, give them
                if (candies - give >= 0) {
                    ans[i] += give;
                    candies -= give;
                }
                // Otherwise, give all of the candies to current person and we are out
                else {
                    ans[i] += candies;
                    candies = 0;
                }
            }
        }
        pass += num_people;
    }

    return ans;
};

module.exports = { distributeCandies };

console.log(distributeCandies(1245, 4));
