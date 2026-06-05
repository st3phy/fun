const { toHex } = require("../src/79-convert-number-hexadecimal.js");

describe("Convert A Number To Hexadecimal", () => {
    const tests = [
        { args: [26], res: "1a" },
        { args: [-1], res: "ffffffff" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(toHex(...args)).toStrictEqual(res);
        });
    }
});
