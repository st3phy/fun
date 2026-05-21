const { isHappy } = require("../src/41-happy-number.js");

describe("Happy Number", () => {
    const tests = [
        { args: [19], res: true },
        { args: [2], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isHappy(...args)).toStrictEqual(res);
        });
    }
});
