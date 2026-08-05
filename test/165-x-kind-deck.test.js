const { hasGroupsSizeX } = require("../src/165-x-kind-deck.js");

describe("X Of A Kind In A Deck Of Cards", () => {
    const tests = [
        { args: [[1, 2, 3, 4, 4, 3, 2, 1]], res: true },
        { args: [[1, 1, 1, 2, 2, 2, 3, 3]], res: false },
        { args: [[1, 1, 2, 2, 2, 2]], res: true },
        { args: [[1, 1, 1, 1, 2, 2, 2, 2, 2, 2]], res: true },
        { args: [[0, 0, 0, 0, 1, 1, 2, 2, 3, 3]], res: true },
        { args: [[1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2]], res: true },
        { args: [[0, 0, 0, 0, 1, 1, 1, 2, 3, 4]], res: false },
        { args: [[1]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hasGroupsSizeX(...args)).toStrictEqual(res);
        });
    }
});
