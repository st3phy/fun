const { findNumbers } = require("../src/220-find-numbers-even.js");

describe("Find Numbers With Even Number Of Digits", () => {
    const tests = [
        { args: [[12, 345, 2, 6, 7896]], res: 2 },
        { args: [[555, 901, 482, 1771]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findNumbers(...args)).toStrictEqual(res);
        });
    }
});
