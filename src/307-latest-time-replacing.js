/**
 * @param {string} time
 * @returns {string}
 */
const maximumTime = time => {
    const res = [time[0], time[1], time[3], time[4]];

    if (res[0] === "?") {
        if (res[1] < "4" || res[1] === "?") {
            res[0] = "2";
        } else {
            res[0] = "1";
        }
    }

    if (res[1] === "?") {
        if (res[0] === "2") {
            res[1] = "3";
        } else {
            res[1] = "9";
        }
    }

    if (res[2] === "?") {
        res[2] = "5";
    }
    if (res[3] === "?") {
        res[3] = "9";
    }

    return res[0] + res[1] + ":" + res[2] + res[3];
};

module.exports = { maximumTime };

console.log(maximumTime("2?:?0"));
