const { mergeTwoLists } = require("../src/6-merge-two-sorted.js");

describe("Merge Two Sorted Lists", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mergeTwoLists(...args)).toStrictEqual(res);
        });
    }
});
