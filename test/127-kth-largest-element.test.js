const { KthLargest } = require("../src/127-kth-largest-element.js");

describe("Kth Largest Element In A Stream", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(KthLargest(...args)).toStrictEqual(res);
        });
    }
});
