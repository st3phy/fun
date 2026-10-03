const { modifyString } = require("../src/276-replace-all-s.js");

describe("Replace All S To Avoid Consecutive Repeating Characters", () => {
    const tests = [
        { args: ["?zs"], res: "azs" },
        { args: ["ubv?w"], res: "ubvaw" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(modifyString(...args)).toStrictEqual(res);
        });
    }
});
