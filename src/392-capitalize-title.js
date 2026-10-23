/**
 * @param {string} title
 * @returns {string}
 */
const capitalizeTitle = title => {
    const words = [];

    for (let word of title.split(" ")) {
        word = word.toLowerCase();
        if (word.length >= 3) {
            words.push(word[0].toUpperCase() + word.slice(1));
        } else {
            words.push(word);
        }
    }

    return words.join(" ");
};

module.exports = { capitalizeTitle };

console.log(capitalizeTitle("capiTalIze tHe titLe"));
