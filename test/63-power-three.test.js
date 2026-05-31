const { isPowerOfThree } = require("../src/63-power-three.js");

describe("Power Of Three", () => {
    const tests = [
        { args: [27], res: true },
        { args: [3], res: true },
        { args: [9], res: true },
        { args: [81], res: true },
        { args: [0], res: false },
        { args: [-1], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPowerOfThree(...args)).toStrictEqual(res);
        });
    }
});
