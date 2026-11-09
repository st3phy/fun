const { addTwoPromises } = require("../src/506-add-two-promises.js");

describe("Add Two Promises", () => {
    const tests = [{ args: [], res: false }];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(addTwoPromises(...args)).toStrictEqual(res);
        });
    }
});
