const { isMonotonic } = require("../src/162-monotonic-array.js");

describe("Monotonic Array", () => {
    const tests = [
        { args: [[1, 2, 2, 3]], res: true },
        { args: [[6, 5, 4, 4]], res: true },
        { args: [[1, 3, 2]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isMonotonic(...args)).toStrictEqual(res);
        });
    }
});
