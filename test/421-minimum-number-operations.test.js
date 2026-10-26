const { convertTime } = require("../src/421-minimum-number-operations.js");

describe("Minimum Number Of Operations To Convert Time", () => {
    const tests = [
        { args: ["02:30", "04:35"], res: 3 },
        { args: ["11:00", "11:01"], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(convertTime(...args)).toStrictEqual(res);
        });
    }
});
