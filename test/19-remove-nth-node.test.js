const { removeNthFromEnd } = require("../src/19-remove-nth-node.js");

describe("Remove Nth Node From End Of List", () => {
    const tests = [
        { head: [1, 2, 3, 4, 5], n: 2, res: [1, 2, 3, 5] },
        { head: [1], n: 1, res: [] },
        { head: [1, 2], n: 1, res: [1] }
    ];

    for (const { head, n, res } of tests) {
        test(`${JSON.stringify(head)} :-${n} = ${JSON.stringify(res)}`, () => {
            const result = listToArray(removeNthFromEnd(arrayToList(head), n));
            expect(result).toStrictEqual(res);
        });
    }
});
