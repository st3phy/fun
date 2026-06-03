const { findTheDifference } = require("../src/74-find-difference.js");

describe("Find The Difference", () => {
    const tests = [
        { args: ["abcd", "abcde"], res: "e" },
        { args: ["", "y"], res: "y" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findTheDifference(...args)).toStrictEqual(res);
        });
    }
});
