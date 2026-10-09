const { numberOfMatches } = require("../src/298-count-matches-tournament.js");

describe("Count Of Matches In Tournament", () => {
    const tests = [
        { args: [7], res: 6 },
        { args: [14], res: 13 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfMatches(...args)).toStrictEqual(res);
        });
    }
});
