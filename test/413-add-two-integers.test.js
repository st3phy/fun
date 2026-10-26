const { sum } = require("../src/413-add-two-integers.js");

describe("Add Two Integers", () => {
    const tests = [
        { args: [12, 5], res: 17 },
        { args: [-10, 4], res: -6 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sum(...args)).toStrictEqual(res);
        });
    }
});
