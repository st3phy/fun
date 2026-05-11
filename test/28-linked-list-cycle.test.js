const { hasCycle } = require("../src/28-linked-list-cycle.js");

describe("Linked List Cycle", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hasCycle(...args)).toStrictEqual(res);
        });
    }
});
