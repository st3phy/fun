const { minDeletionSize } = require("../src/173-delete-column-make.js");

describe("Delete Column To Make Sorted", () => {
    const tests = [
        { args: [["cba", "daf", "ghi"]], res: 1 },
        { args: [["a", "b"]], res: 0 },
        { args: [["zyx", "wvu", "tsr"]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minDeletionSize(...args)).toStrictEqual(res);
        });
    }
});
