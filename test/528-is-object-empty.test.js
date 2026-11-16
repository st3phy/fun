const { isEmpty } = require("../src/528-is-object-empty.js");

describe("Is Object Empty", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isEmpty(...args)).toStrictEqual(res);
        });
    }
});
