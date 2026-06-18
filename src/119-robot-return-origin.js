/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
    const pos = [0, 0];

    for (const move of moves) {
        switch (move) {
            case "U":
                pos[1]++;
                break;
            case "D":
                pos[1]--;
                break;
            case "L":
                pos[0]--;
                break;
            default:
                pos[0]++;
        }
    }
    return pos[0] === 0 && pos[1] === 0;
};

module.exports = { judgeCircle };

console.log(judgeCircle("UD"));
