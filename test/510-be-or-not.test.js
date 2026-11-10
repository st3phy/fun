const { expect } = require("../src/510-be-or-not.js");

describe("To Be Or Not To Be", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(expect(...args)).toStrictEqual(res);
        });
    }
});
