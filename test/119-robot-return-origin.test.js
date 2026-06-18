const { judgeCircle } = require("../src/119-robot-return-origin.js");

describe("Robot Return To Origin", () => {
    const tests = [
        { args: ["UD"], res: true },
        { args: ["LL"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(judgeCircle(...args)).toStrictEqual(res);
        });
    }
});
