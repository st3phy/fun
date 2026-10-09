const { countStudents } = require("../src/300-number-students-unable.js");

describe("Number Of Students Unable To Eat Lunch", () => {
    const tests = [
        {
            args: [
                [1, 1, 0, 0],
                [0, 1, 0, 1]
            ],
            res: 0
        },
        {
            args: [
                [1, 1, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 1]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countStudents(...args)).toStrictEqual(res);
        });
    }
});
