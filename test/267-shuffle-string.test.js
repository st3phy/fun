const { restoreString } = require("../src/267-shuffle-string.js");

describe("Shuffle String", () => {
    const tests = [
        { args: ["codeleet"], res: [4, 5, 6, 7, 0, 2, 1, 3] },
        { args: ["abc"], res: [0, 1, 2] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(restoreString(...args)).toStrictEqual(res);
        });
    }
});
