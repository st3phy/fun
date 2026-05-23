const { reverseList } = require("../src/44-reverse-linked-list.js");

describe("Reverse Linked List", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseList(...args)).toStrictEqual(res);
        });
    }
});
