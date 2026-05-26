const { sortedArrayToBST } = require("../src/51-convert-sorted-array.js");

describe("Convert Sorted Array To Binary Search Tree", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortedArrayToBST(...args)).toStrictEqual(res);
        });
    }
});
