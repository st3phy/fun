const { findMiddleIndex } = require("../src/361-find-middle-index.js");

describe("Find The Middle Index In Array", () => {
    const tests = [
        { args: [[2, 3, -1, 8, 4]], res: 3 },
        { args: [[1, -1, 4]], res: 2 },
        { args: [[2, 5]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findMiddleIndex(...args)).toStrictEqual(res);
        });
    }
});
