const { canByTypeWords } = require("../src/347-maximum-number-words.js");

describe("Maximum Number Of Words You Can Type", () => {
    const tests = [
        { args: ["hello world", "ad"], res: 1 },
        { args: ["leet code", "lt"], res: 1 },
        { args: ["leet code", "e"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canByTypeWords(...args)).toStrictEqual(res);
        });
    }
});
