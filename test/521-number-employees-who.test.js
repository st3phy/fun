const { numberOfEmployeesWhoMetTarget } = require("../src/521-number-employees-who.js");

describe("Number Of Employees Who Met The Target", () => {
    const tests = [
        { args: [[0, 1, 2, 3, 4], 2], res: 3 },
        { args: [[5, 1, 4, 2, 2], 6], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfEmployeesWhoMetTarget(...args)).toStrictEqual(res);
        });
    }
});
