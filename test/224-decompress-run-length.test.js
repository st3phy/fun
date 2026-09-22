const { decompressRLElist } = require("../src/224-decompress-run-length.js");

describe("Decompress Run Length Encoded List", () => {
    const tests = [
        { args: [[1, 2, 3, 4]], res: [2, 4, 4, 4] },
        { args: [[1, 1, 2, 3]], res: [1, 3, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(decompressRLElist(...args)).toStrictEqual(res);
        });
    }
});
