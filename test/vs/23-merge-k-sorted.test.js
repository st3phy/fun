const { mergeKLists } = require("../src/23-merge-k-sorted.js");

describe("Merge K Sorted Lists", () => {
    const tests = [
        {
            lists: [
                [1, 4, 5, 8, 9],
                [1, 3, 4],
                [2, 6]
            ],
            res: [1, 1, 2, 3, 4, 4, 5, 6, 8, 9]
        },
        { lists: [], res: [] },
        { lists: [[]], res: [] },
        { lists: [[0, 2, 5]], res: [0, 2, 5] }
    ];

    for (const { lists, res } of tests) {
        test(`${JSON.stringify(lists)} = ${JSON.stringify(res)}`, () => {
            const result = listToArray(mergeKLists(lists.map(arrayToList)));
            expect(result).toStrictEqual(res);
        });
    }
});
