const { nextGreaterElement } = require("../src/96-next-greater-element.js");

describe("Next Greater Element I", () => {
    const tests = [
        {
            args: [
                [4, 1, 2],
                [1, 3, 4, 2]
            ],
            res: [-1, 3, -1]
        },
        {
            args: [
                [2, 4],
                [1, 2, 3, 4]
            ],
            res: [3, -1]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(nextGreaterElement(...args)).toStrictEqual(res);
        });
    }
});
