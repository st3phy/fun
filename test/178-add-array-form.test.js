const { addToArrayForm } = require("../src/178-add-array-form.js");

describe("Add To Array Form Of Integer", () => {
    const tests = [
        { args: [[1, 2, 0, 0], 34], res: [1, 2, 3, 4] },
        { args: [[2, 7, 4], 181], res: [4, 5, 5] },
        { args: [[2, 1, 5], 806], res: [1, 0, 2, 1] },
        { args: [[5], 806], res: [8, 1, 1] },
        { args: [[1, 2, 5], 6], res: [1, 3, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(addToArrayForm(...args)).toStrictEqual(res);
        });
    }
});
