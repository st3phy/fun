const { MyHashSet } = require("../src/129-design-hashset.js");

describe("Design HashSet", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(MyHashSet(...args)).toStrictEqual(res);
        });
    }
});
