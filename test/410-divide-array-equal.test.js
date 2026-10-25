const { divideArray } = require("../src/410-divide-array-equal.js");

describe("Divide Array Into Equal Pairs", () => {
    const tests = [
        { args: [[3, 2, 3, 2, 2, 2]], res: true },
        { args: [[1, 2, 3, 4]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(divideArray(...args)).toStrictEqual(res);
        });
    }
});
