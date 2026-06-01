const { reverseString } = require("../src/66-reverse-string.js");

describe("Reverse String", () => {
    const tests = [
        { args: [["h", "e", "l", "l", "o"]], res: ["o", "l", "l", "e", "h"] },
        { args: [["H", "a", "n", "n", "a", "h"]], res: ["h", "a", "n", "n", "a", "H"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseString(...args)).toStrictEqual(res);
        });
    }
});
