const { MyQueue } = require("../src/525-implement-queue-using.js");

describe("Implement Queue Using Stacks", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(MyQueue(...args)).toStrictEqual(res);
        });
    }
});
