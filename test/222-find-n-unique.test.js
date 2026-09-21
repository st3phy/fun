const { sumZero } = require("../src/222-find-n-unique.js");

describe("Find N Unique Integers Sum Up To Zero", () => {
    const tests = [
        { args: [5], res: [-2, -1, 0, 1, 2] },
        { args: [3], res: [-1, 0, 1] },
        { args: [4], res: [-2, -1, 1, 2] },
        { args: [1], res: [0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumZero(...args)).toStrictEqual(res);
        });
    }
});
