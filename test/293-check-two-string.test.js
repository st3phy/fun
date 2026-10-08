const { arrayStringsAreEqual } = require("../src/293-check-two-string.js");

describe("Check If Two String Arrays Are Equivalent", () => {
    const tests = [
        {
            args: [
                ["ab", "c"],
                ["a", "bc"]
            ],
            res: true
        },
        {
            args: [
                ["a", "cb"],
                ["ab", "c"]
            ],
            res: false
        },
        { args: [["abc", "d", "defg"], ["abcddefg"]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arrayStringsAreEqual(...args)).toStrictEqual(res);
        });
    }
});
