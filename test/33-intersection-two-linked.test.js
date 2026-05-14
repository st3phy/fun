const { getIntersectionNode } = require("../src/33-intersection-two-linked.js");

describe("Intersection Of Two Linked Lists", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getIntersectionNode(...args)).toStrictEqual(res);
        });
    }
});
