const { buddyStrings } = require("../src/154-buddy-strings.js");

describe("Buddy Strings", () => {
    const tests = [
        { args: ["ab", "ba"], res: true },
        { args: ["ab", "ab"], res: false },
        { args: ["aa", "aa"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(buddyStrings(...args)).toStrictEqual(res);
        });
    }
});
