const { smallerNumbersThanCurrent } = require("../src/235-how-many-numbers.js");

describe("How Many Numbers Are Smaller Than The Current Number", () => {
    const tests = [
        { args: [[8, 1, 2, 2, 3]], res: [4, 0, 1, 1, 3] },
        { args: [[6, 5, 4, 8]], res: [2, 1, 0, 3] },
        { args: [[7, 7, 7, 7]], res: [0, 0, 0, 0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(smallerNumbersThanCurrent(...args)).toStrictEqual(res);
        });
    }
});
