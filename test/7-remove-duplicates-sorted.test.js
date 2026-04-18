const { removeDuplicates } = require("../src/7-remove-duplicates-sorted.js");

describe("Remove Duplicates From Sorted Array", () => {
    const tests = [
        { args: [1, 1, 2], res: 2 },
        { args: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], res: 5 },
        { args: [], res: 0 },
        { args: [-3, -1, -1, 0, 0, 0, 0, 0, 2], res: 4 },
        { args: [1, 2, 3, 4], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeDuplicates(args)).toStrictEqual(res);
        });
    }
});
