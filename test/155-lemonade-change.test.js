const { lemonadeChange } = require("../src/155-lemonade-change.js");

describe("Lemonade Change", () => {
    const tests = [
        { args: [[5, 5, 5, 10, 20]], res: true },
        { args: [[5, 5, 10, 10, 20]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(lemonadeChange(...args)).toStrictEqual(res);
        });
    }
});
