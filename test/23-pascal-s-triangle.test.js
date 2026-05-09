const { generate } = require("../src/23-pascal-s-triangle.js");

describe("Pascal S Triangle", () => {
    const tests = [
        { args: [5], res: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
        { args: [1], res: [[1]] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(generate(...args)).toStrictEqual(res);
        });
    }
});
