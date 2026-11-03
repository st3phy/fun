const { passThePillow } = require("../src/480-pass-pillow.js");

describe("Pass The Pillow", () => {
    const tests = [
        { args: [4, 5], res: 2 },
        { args: [3, 2], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(passThePillow(...args)).toStrictEqual(res);
        });
    }
});
