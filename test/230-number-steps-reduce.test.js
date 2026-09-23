const { numberOfSteps } = require("../src/230-number-steps-reduce.js");

describe("Number Of Steps To Reduce A Number To Zero", () => {
    const tests = [
        { args: [14], res: 6 },
        { args: [8], res: 4 },
        { args: [123], res: 12 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfSteps(...args)).toStrictEqual(res);
        });
    }
});
