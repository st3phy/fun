const { minStartValue } = require("../src/245-minimum-value-get.js");

describe("Minimum Value To Get Positive Step By Step Sum", () => {
    const tests = [
        { args: [[-3, 2, -3, 4, 2]], res: 5 },
        { args: [[1, 2]], res: 1 },
        { args: [[1, -2, -3]], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minStartValue(...args)).toStrictEqual(res);
        });
    }
});
