const { maxLengthBetweenEqualCharacters } = require("../src/285-largest-substring-between.js");

describe("Largest Substring Between Two Equal Characters", () => {
    const tests = [
        { args: ["aa"], res: 0 },
        { args: ["abca"], res: 2 },
        { args: ["cbzxy"], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxLengthBetweenEqualCharacters(...args)).toStrictEqual(res);
        });
    }
});
