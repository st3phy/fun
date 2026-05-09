const { getRow } = require("../src/24-pascal-s-triangle.js");

describe("Pascal S Triangle II", () => {
    const tests = [
        { args: [3], res: [1, 3, 3, 1] },
        { args: [0], res: [1] },
        { args: [1], res: [1, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getRow(...args)).toStrictEqual(res);
        });
    }
});
