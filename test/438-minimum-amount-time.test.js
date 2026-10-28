const { fillCups } = require("../src/438-minimum-amount-time.js");

describe("Minimum Amount Of Time To Fill Cups", () => {
    const tests = [
        { args: [[1, 4, 2]], res: 4 },
        { args: [[5, 0, 0]], res: 5 },
        { args: [[5, 4, 4]], res: 7 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(fillCups(...args)).toStrictEqual(res);
        });
    }
});
