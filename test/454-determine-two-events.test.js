const { haveConflict } = require("../src/454-determine-two-events.js");

describe("Determine If Two Events Have Conflict", () => {
    const tests = [
        {
            args: [
                ["01:15", "02:00"],
                ["02:00", "03:00"]
            ],
            res: true
        },
        {
            args: [
                ["01:00", "02:00"],
                ["01:20", "03:00"]
            ],
            res: true
        },
        {
            args: [
                ["10:00", "11:00"],
                ["14:00", "15:00"]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(haveConflict(...args)).toStrictEqual(res);
        });
    }
});
