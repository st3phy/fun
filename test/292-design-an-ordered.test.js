const { OrderedStream } = require("../src/292-design-an-ordered.js");

describe("Design An Ordered Stream", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(OrderedStream(...args)).toStrictEqual(res);
        });
    }
});
