const { findSpecialInteger } = require("../src/219-element-appearing-more.js");

describe("Element Appearing More Than 25 In Sorted Array", () => {
    const tests = [
        { args: [[1, 2, 2, 6, 6, 6, 6, 7, 10]], res: 6 },
        { args: [[1, 1]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findSpecialInteger(...args)).toStrictEqual(res);
        });
    }
});
