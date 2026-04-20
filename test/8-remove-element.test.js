const { removeElement } = require("../src/8-remove-element.js");

describe("Remove Element", () => {
    const tests = [
        { args: [[3, 2, 2, 3], 3], res: 2 },
        { args: [[0, 1, 2, 2, 3, 0, 4, 2], 2], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`\n nums = [${args[0]}] \n val = ${args[1]} \n result = ${res}`, () => {
            expect(removeElement(...args)).toStrictEqual(res);
        });
    }
});
