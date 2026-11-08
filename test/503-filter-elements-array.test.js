const { filter } = require("../src/503-filter-elements-array.js");

describe("Filter Elements From Array", () => {
    const tests = [
        {
            args: [
                [0, 10, 20, 30],
                function greaterThan10(n) {
                    return n > 10;
                }
            ],
            res: [20, 30]
        },
        {
            args: [
                [1, 2, 3],
                function firstIndex(n, i) {
                    return i === 0;
                }
            ],
            res: [1]
        },
        {
            args: [
                [-2, -1, 0, 1, 2],
                function plusOne(n) {
                    return n + 1;
                }
            ],
            res: [-2, 0, 1, 2]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(filter(...args)).toStrictEqual(res);
        });
    }
});
