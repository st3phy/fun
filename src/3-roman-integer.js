/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    // Brute force - case by case; runtime 3ms, memory 61mb
    // let result = 0;
    // for (let i = 0; i < s.length; i++) {
    //     switch (s[i]) {
    //         case "I":
    //             if (s[i + 1] == "V") {
    //                 result += 4;
    //                 i++;
    //             } else if (s[i + 1] == "X") {
    //                 result += 9;
    //                 i++;
    //             } else {
    //                 result += 1;
    //             }
    //             break;
    //         case "V":
    //             result += 5;
    //             break;
    //         case "X":
    //             if (s[i + 1] == "L") {
    //                 result += 40;
    //                 i++;
    //             } else if (s[i + 1] == "C") {
    //                 result += 90;
    //                 i++;
    //             } else {
    //                 result += 10;
    //             }
    //             break;
    //         case "L":
    //             result += 50;
    //             break;
    //         case "C":
    //             if (s[i + 1] == "D") {
    //                 result += 400;
    //                 i++;
    //             } else if (s[i + 1] == "M") {
    //                 result += 900;
    //                 i++;
    //             } else {
    //                 result += 100;
    //             }
    //             break;
    //         case "D":
    //             result += 500;
    //             break;
    //         case "M":
    //             result += 1000;
    //             break;
    //     }
    // }
    // return result;

    //Brute force - case by case but shorter; runtime 3ms, memory 61mb
    // let result = 0;
    // for (let i = 0; i < s.length; i++) {
    //     switch (s[i]) {
    //         case "I":
    //             if (s[i + 1] == "V" || s[i + 1] == "X") {
    //                 result -= 1;
    //             } else {
    //                 result += 1;
    //             }
    //             break;
    //         case "V":
    //             result += 5;
    //             break;
    //         case "X":
    //             if (s[i + 1] == "L" || s[i + 1] == "C") {
    //                 result -= 10;
    //             } else {
    //                 result += 10;
    //             }
    //             break;
    //         case "L":
    //             result += 50;
    //             break;
    //         case "C":
    //             if (s[i + 1] == "D" || s[i + 1] == "M") {
    //                 result -= 100;
    //             } else {
    //                 result += 100;
    //             }
    //             break;
    //         case "D":
    //             result += 500;
    //             break;
    //         case "M":
    //             result += 1000;
    //             break;
    //     }
    // }
    // return result;

    // HashMap solution; runtime 2ms, memory 61mb
    const hashMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // If next character is larger than current, substract current, otherwise add it
        result += hashMap[s[i]] < hashMap[s[i + 1]] ? -hashMap[s[i]] : hashMap[s[i]];
    }
    return result;
};

module.exports = { romanToInt };

romanToInt("MCMXCIV");
