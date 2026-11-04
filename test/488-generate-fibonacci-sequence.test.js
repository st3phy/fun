const { fibGenerator } = require("../src/488-generate-fibonacci-sequence.js");

describe("Generate Fibonacci Sequence", () => {
    const tests = [
        { args: [5], res: [0, 1, 1, 2, 3] },
        { args: [0], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(fibGenerator(...args)).toStrictEqual(res);
        });
    }
});
