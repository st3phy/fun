const { sortEvenOdd } = require("../src/399-sort-even-odd.js");

describe("Sort Even And Odd Indices Independently", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortEvenOdd(...args)).toStrictEqual(res);
        });
    }
});
