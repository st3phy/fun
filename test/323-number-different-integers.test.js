const { numDifferentIntegers } = require("../src/323-number-different-integers.js");

describe("Number Of Different Integers In A String", () => {
    const tests = [
        { args: ["a123bc34d8ef34"], res: 3 },
        { args: ["a1b01c001"], res: 1 },
        { args: ["leet1234code234"], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numDifferentIntegers(...args)).toStrictEqual(res);
        });
    }
});
