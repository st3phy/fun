const { isUgly } = require("../src/57-ugly-number.js");

describe("Ugly Number", () => {
    const tests = [
        { args: [6], res: true },
        { args: [1], res: true },
        { args: [14], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isUgly(...args)).toStrictEqual(res);
        });
    }
});
