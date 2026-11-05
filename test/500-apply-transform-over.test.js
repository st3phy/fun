const { map } = require("../src/500-apply-transform-over.js");

describe("Apply Transform Over Each Element In Array", () => {
    const tests = [
        {
            args: [
                [1, 2, 3],
                function plusone(n) {
                    return n + 1;
                }
            ],
            res: [2, 3, 4]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(map(...args)).toStrictEqual(res);
        });
    }
});
