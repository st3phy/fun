const { canThreePartsEqualSum } = require("../src/184-partition-array-three.js");

describe("Partition Array Into Three Parts With Equal Sum", () => {
    const tests = [
        { args: [[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]], res: true },
        { args: [[3, 3, 6, 5, -2, 2, 5, 1, -9, 4]], res: true },
        { args: [[18, 12, -18, 18, -19, -1, 10, 10]], res: true },
        { args: [[0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canThreePartsEqualSum(...args)).toStrictEqual(res);
        });
    }
});
