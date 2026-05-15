const { majorityElement } = require("../src/35-majority-element.js");

describe("Majority Element", () => {
    const tests = [
        { args: [[3, 2, 3]], res: 3 },
        { args: [[2, 2, 1, 1, 1, 2, 2]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(majorityElement(...args)).toStrictEqual(res);
        });
    }
});
