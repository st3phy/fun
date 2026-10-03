/**
 * @param {string} s
 * @returns {string}
 */
const modifyString = s => {
    const arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "?") {
            // Try adding "a"
            let candidate = "a";

            // If a previous or next element does not exist, use a "-" to avoid errors
            const prev = arr[i - 1] || "";
            const next = arr[i + 1] || "";

            // Increment candidate until we get to a letter that is not repeated
            while (candidate === prev || candidate === next) {
                candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
            }

            arr[i] = candidate;
        }
    }

    return arr.join("");
};

module.exports = { modifyString };

console.log(modifyString("?zs")); //abcba
