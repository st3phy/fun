const { checkIfExist } = require("../src/231-check-n-its.js");

describe("Check If N And Its Double Exist", () => {
    const tests = [
        { args: [[10, 2, 5, 3]], res: true },
        { args: [[3, 1, 7, 11]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkIfExist(...args)).toStrictEqual(res);
        });
    }
});
