const { countBinarySubstrings } = require("../src/125-count-binary-substrings.js");

describe("Count Binary Substrings", () => {
    const tests = [
        { args: ["00110011"], res: 6 },
        { args: ["10101"], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countBinarySubstrings(...args)).toStrictEqual(res);
        });
    }
});
