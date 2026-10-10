const { decode } = require("../src/304-decode-xored-array.js");

describe("Decode XORed Array", () => {
    const tests = [
        { args: [[1, 2, 3], 1], res: [1, 0, 2, 1] },
        { args: [[6, 2, 7, 3], 4], res: [4, 2, 0, 7, 4] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(decode(...args)).toStrictEqual(res);
        });
    }
});
