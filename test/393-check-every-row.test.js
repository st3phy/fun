const { checkValid } = require("../src/393-check-every-row.js");

describe("Check If Every Row And Column Contains All Numbers", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkValid(...args)).toStrictEqual(res);
        });
    }
});
