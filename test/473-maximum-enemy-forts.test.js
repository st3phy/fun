const { captureForts } = require("../src/473-maximum-enemy-forts.js");

describe("Maximum Enemy Forts That Can Be Captured", () => {
    const tests = [
        { args: [[1, 0, 0, -1, 0, 0, 0, 0, 1]], res: 4 },
        { args: [[0, 0, 1, -1]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(captureForts(...args)).toStrictEqual(res);
        });
    }
});
