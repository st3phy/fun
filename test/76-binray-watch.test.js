const { readBinaryWatch } = require("../src/76-binray-watch.js");

describe("Binray Watch", () => {
    const tests = [
        { args: [1], res: ["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"] },
        { args: [9], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(readBinaryWatch(...args)).toStrictEqual(res);
        });
    }
});
