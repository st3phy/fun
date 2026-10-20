const { kthDistinct } = require("../src/375-kth-distinct-string.js");

describe("Kth Distinct String In An Array", () => {
    const tests = [
        { args: [["d", "b", "c", "b", "c", "a"], 2], res: "a" },
        { args: [["aaa", "aa", "a"], 1], res: "aaa" },
        { args: [["a", "b", "a"], 3], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(kthDistinct(...args)).toStrictEqual(res);
        });
    }
});
