const { reverseBits } = require("../src/38-reverse-bits.js");

describe("Reverse Bits", () => {
    const tests = [
        { args: [43261596], res: 964176192 },
        { args: [2147483644], res: 1073741822 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseBits(...args)).toStrictEqual(res);
        });
    }
});
