const { mergeTwoLists } = require("../src/21-merge-two-sorted.js");

describe("Merge Two Sorted Lists", () => {
    const tests = [
        {
            lists: [
                [1, 2, 4],
                [1, 3, 4]
            ],
            res: [1, 1, 2, 3, 4, 4]
        },
        {
            lists: [
                [1, 2, 4],
                [1, 3, 4, 5, 6]
            ],
            res: [1, 1, 2, 3, 4, 4, 5, 6]
        },
        { lists: [[], []], res: [] },
        { lists: [[], [0]], res: [0] }
    ];

    for (const { lists, res } of tests) {
        test(`${JSON.stringify(lists)} = ${JSON.stringify(res)}`, () => {
            const result = listToArray(mergeTwoLists(...lists.map(arrayToList)));
            expect(result).toStrictEqual(res);
        });
    }
});
