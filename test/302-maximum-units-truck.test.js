const { maximumUnits } = require("../src/302-maximum-units-truck.js");

describe("Maximum Units On A Truck", () => {
    const tests = [
        {
            args: [
                [
                    [1, 3],
                    [2, 2],
                    [3, 1]
                ],
                4
            ],
            res: 8
        },
        {
            args: [
                [
                    [5, 10],
                    [2, 5],
                    [4, 7],
                    [3, 9]
                ],
                10
            ],
            res: 91
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumUnits(...args)).toStrictEqual(res);
        });
    }
});
