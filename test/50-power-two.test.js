const { isPowerOfTwo } = require("../src/50-power-two.js");

describe("Power Of Two", () => {
    const tests = [
        { args: [1], res: true },
        { args: [16], res: true },
        { args: [3], res: false },
        { args: [22], res: false },
        { args: [0], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPowerOfTwo(...args)).toStrictEqual(res);
        });
    }
});
