const { deleteDuplicates } = require("../src/17-remove-duplicates-sorted.js");

describe("Remove Duplicates From Sorted List", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(deleteDuplicates(...args)).toStrictEqual(res);
        });
    }
});
