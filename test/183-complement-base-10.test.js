const { bitwiseComplement } = require("../src/183-complement-base-10.js");

describe("Complement Of Base 10 Integer", () => {
    const tests = [
        { args: [5], res: 2 },
        { args: [7], res: 0 },
        { args: [10], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(bitwiseComplement(...args)).toStrictEqual(res);
        });
    }
});
