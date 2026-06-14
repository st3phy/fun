const { checkRecord } = require("../src/106-student-attendance-record.js");

describe("Student Attendance Record I", () => {
    const tests = [
        { args: ["PPALLP"], res: true },
        { args: ["PPALLL"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkRecord(...args)).toStrictEqual(res);
        });
    }
});
