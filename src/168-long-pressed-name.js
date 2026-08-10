/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
    // let currLetter = "";
    // let nameLetterSize = 0;
    // let typedLetterSize = 0;
    // let j = 0;

    // for (let i = 0; i < name.length; i++) {
    //     // Count how many times the current letter appears in the name
    //     if (name[i] === currLetter) {
    //         nameLetterSize++;
    //     } else {
    //         // Restart counting when finding a new letter
    //         currLetter = name[i];
    //         nameLetterSize = 1;
    //         typedLetterSize = 0;
    //     }
    //     // Count how many times the current letter appears in the typed name
    //     while (typed[j] === currLetter) {
    //         typedLetterSize++;
    //         j++;
    //     }
    //     // If there are less of the same letter in typed than in name
    //     if (nameLetterSize > typedLetterSize) {
    //         return false;
    //     }
    // }

    // // Return true if the typed name was completely consumed
    // return typed.length === j;

    // Two pointer solution
    let i = 0,
        j = 0;

    while (j < typed.length) {
        // If values match, move both pointers
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        }
        // If values don't match, but we have a repeat of the previous value in typed, move pointer for typed
        else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }

    // Return true if we got to the end of name
    return i === name.length;
};

module.exports = { isLongPressedName };

console.log(isLongPressedName("saeed", "ssaaedd"));
