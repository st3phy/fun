const { removeElements } = require("../src/42-remove-linked-list.js");

describe("Remove Linked List Elements", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeElements(...args)).toStrictEqual(res);
        });
    }
});
