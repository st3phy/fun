const { divisorSubstrings } = require("../src/419-find-k-beauty.js");

describe("Find The K Beauty Of A Number", () => {
    const tests = [
        { args: [240, 2], res: 2 },
        { args: [430043, 2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(divisorSubstrings(...args)).toStrictEqual(res);
        });
    }
});
