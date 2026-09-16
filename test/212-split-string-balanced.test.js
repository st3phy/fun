const { balancedStringSplit } = require("../src/212-split-string-balanced.js");

describe("Split A String In Balanced Strings", () => {
    const tests = [
        { args: ["RLRRLLRLRL"], res: 4 },
        { args: ["RLRRRLLRLL"], res: 2 },
        { args: ["LLLLRRRR"], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(balancedStringSplit(...args)).toStrictEqual(res);
        });
    }
});
