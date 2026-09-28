/**
 * @param {string[][]} paths
 * @returns {string}
 */
const destCity = paths => {
    // Map origin cities
    const origins = new Set();
    for (const path of paths) {
        origins.add(path[0]);
    }

    // The destination that is not also an origin is the final destination city
    for (const path of paths) {
        if (!origins.has(path[1])) {
            return path[1];
        }
    }
};

module.exports = { destCity };
