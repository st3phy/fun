const { countTime } = require("../src/451-number-valid-clock.js");

describe("Number Of Valid Clock Times", () => {
    const tests = [
        { args: ["?5:00"], res: 2 },
        { args: ["0?:0?"], res: 100 },
        { args: ["??:??"], res: 1440 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countTime(...args)).toStrictEqual(res);
        });
    }
});
