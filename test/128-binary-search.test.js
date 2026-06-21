const { search } = require("../src/128-binary-search.js");

describe("Binary Search", () => {
    const tests = [
        { args: [[-1, 0, 3, 5, 9, 12], 9], res: 4 },
        { args: [[-1, 0, 3, 5, 9, 12], 2], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(search(...args)).toStrictEqual(res);
        });
    }
});
