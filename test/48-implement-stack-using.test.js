const { MyStack } = require("../src/48-implement-stack-using.js");

describe("Implement Stack Using Queues", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(MyStack(...args)).toStrictEqual(res);
        });
    }
});
