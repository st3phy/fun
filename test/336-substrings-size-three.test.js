const { countGoodSubstrings } = require("../src/336-substrings-size-three.js");

describe("Substrings Of Size Three With Distinct Characters", () => {
    const tests = [
        { args: ["xyzzaz"], res: 1 },
        { args: ["aababcabc"], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countGoodSubstrings(...args)).toStrictEqual(res);
        });
    }
});
