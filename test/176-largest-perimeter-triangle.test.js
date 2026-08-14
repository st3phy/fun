const { largestPerimeter } = require("../src/176-largest-perimeter-triangle.js");

describe("Largest Perimeter Triangle", () => {
    const tests = [
        { args: [[2, 1, 2]], res: 5 },
        { args: [[1, 2, 1, 10]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestPerimeter(...args)).toStrictEqual(res);
        });
    }
});
