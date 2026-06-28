const { selfDividingNumbers } = require("../src/134-self-dividing-numbers.js");

describe("Self Dividing Numbers", () => {
    const tests = [
        { args: [1, 22], res: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22] },
        { args: [47, 85], res: [48, 55, 66, 77] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(selfDividingNumbers(...args)).toStrictEqual(res);
        });
    }
});
