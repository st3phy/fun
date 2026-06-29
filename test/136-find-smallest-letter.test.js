const { nextGreatestLetter } = require("../src/136-find-smallest-letter.js");

describe("Find Smallest Letter Greater Than Target", () => {
    const tests = [
        { args: [["c", "f", "j"], "a"], res: "c" },
        { args: [["c", "f", "j"], "c"], res: "f" },
        { args: [["x", "x", "y", "y"], "z"], res: "x" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(nextGreatestLetter(...args)).toStrictEqual(res);
        });
    }
});
