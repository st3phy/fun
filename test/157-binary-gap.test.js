const { binaryGap } = require("../src/157-binary-gap.js");

describe("Binary Gap", () => {
    const tests = [
        { args: [22], res: 2 },
        { args: [8], res: 0 },
        { args: [5], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(binaryGap(...args)).toStrictEqual(res);
        });
    }
});
