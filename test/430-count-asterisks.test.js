const { countAsterisks } = require("../src/430-count-asterisks.js");

describe("Count Asterisks", () => {
    const tests = [
        { args: ["l|*e*et|c**o|*de|"], res: 2 },
        { args: ["iamprogrammer"], res: 0 },
        { args: ["yo|uar|e**|b|e***au|tifu|l"], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countAsterisks(...args)).toStrictEqual(res);
        });
    }
});
