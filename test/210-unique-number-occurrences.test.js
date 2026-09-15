const { uniqueOccurrences } = require("../src/210-unique-number-occurrences.js");

describe("Unique Number Of Occurrences", () => {
    const tests = [
        { args: [[1, 2, 2, 1, 1, 3]], res: true },
        { args: [[1, 2]], res: false },
        { args: [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(uniqueOccurrences(...args)).toStrictEqual(res);
        });
    }
});
