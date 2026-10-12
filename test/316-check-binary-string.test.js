const { checkOnesSegment } = require("../src/316-check-binary-string.js");

describe("Check If Binary String Has At Most One Segment Of Ones", () => {
    const tests = [
        { args: ["1001"], res: false },
        { args: ["110"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkOnesSegment(...args)).toStrictEqual(res);
        });
    }
});
