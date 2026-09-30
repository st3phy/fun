const { xorOperation } = require("../src/259-xor-operation-an.js");

describe("XOR Operation In An Array", () => {
    const tests = [
        { args: [5, 0], res: 8 },
        { args: [4, 3], res: 8 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(xorOperation(...args)).toStrictEqual(res);
        });
    }
});
