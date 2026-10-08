const { decrypt } = require("../src/291-defuse-bomb.js");

describe("Defuse The Bomb", () => {
    const tests = [
        { args: [[5, 7, 1, 4], 3], res: [12, 10, 16, 13] },
        { args: [[1, 2, 3, 4], 0], res: [0, 0, 0, 0] },
        { args: [[2, 4, 9, 3], -2], res: [12, 5, 6, 13] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(decrypt(...args)).toStrictEqual(res);
        });
    }
});
