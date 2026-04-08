const { maxArea } = require("../src/11-container-with-most.js");

describe("Container With Most Water", () => {
    const tests = [
        { heights: [1, 2, 4, 3], res: 4 },
        { heights: [0, 2], res: 0 },
        { heights: [1, 2, 1], res: 2 },
        { heights: [1, 8, 6, 2, 5, 4, 8, 3, 7], res: 49 },
        { heights: [1, 1], res: 1 }
    ];

    for (const { heights, res } of tests) {
        test(`${heights}: ${res}`, () => {
            expect(maxArea(heights)).toStrictEqual(res);
        });
    }
});
