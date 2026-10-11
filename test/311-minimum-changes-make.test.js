const { minOperations } = require("../src/311-minimum-changes-make.js");

describe("Minimum Changes To Make Alternating Binary String", () => {
    const tests = [
        { args: ["0100"], res: 1 },
        { args: ["10"], res: 0 },
        { args: ["1111"], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minOperations(...args)).toStrictEqual(res);
        });
    }
});
