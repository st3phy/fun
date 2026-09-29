const { busyStudent } = require("../src/252-number-students-doing.js");

describe("Number Of Students Doing Homework At A Given Time", () => {
    const tests = [
        { args: [[1, 2, 3], [3, 2, 7], 4], res: 1 },
        { args: [[4], [4], 4], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(busyStudent(...args)).toStrictEqual(res);
        });
    }
});
