const { rotateString } = require("../src/143-rotate-string.js");

describe("Rotate String", () => {
    const tests = [
        { args: ["abcde", "cdeab"], res: true },
        { args: ["abcde", "abced"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(rotateString(...args)).toStrictEqual(res);
        });
    }
});
