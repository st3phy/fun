const { hammingDistance } = require("../src/89-hamming-distance.js");

describe("Hamming Distance", () => {
    const tests = [
        { args: [1, 4], res: 2 },
        { args: [1, 3], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hammingDistance(...args)).toStrictEqual(res);
        });
    }
});
