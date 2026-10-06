const { specialArray } = require("../src/282-special-array-x.js");

describe("Special Array With X Elements Greater Than Or Equal X", () => {
    const tests = [
        { args: [[3, 5]], res: 2 },
        { args: [[0, 0]], res: -1 },
        { args: [[1, 1]], res: -1 },
        { args: [[0, 1, 2, 3, 4]], res: -1 },
        { args: [[1000]], res: 1 },
        { args: [[0, 0, 3, 3, 4]], res: 3 },
        { args: [[0, 4, 3, 0, 4]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(specialArray(...args)).toStrictEqual(res);
        });
    }
});
