const { checkZeroOnes } = require("../src/335-longer-contiguous-segments.js");

describe("Longer Contiguous Segments Of Ones Than Zeros", () => {
    const tests = [
        { args: ["1101"], res: true },
        { args: ["111000"], res: false },
        { args: ["110100010"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkZeroOnes(...args)).toStrictEqual(res);
        });
    }
});
