const { reverseList } = require("../src/45-reverse-linked-list.js");

describe("Reverse Linked List Recursive", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseList(...args)).toStrictEqual(res);
        });
    }
});
