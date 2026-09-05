const { removeDuplicates } = require("../src/191-remove-all-adjacent.js");

describe("Remove All Adjacent Duplicates In String", () => {
    const tests = [
        { args: ["abbaca"], res: "ca" },
        { args: ["azxxzy"], res: "ay" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeDuplicates(...args)).toStrictEqual(res);
        });
    }
});
