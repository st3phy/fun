const { maximumPopulation } = require("../src/332-maximum-population-year.js");

describe("Maximum Population Year", () => {
    const tests = [
        {
            args: [
                [
                    [1993, 1999],
                    [2000, 2010]
                ]
            ],
            res: 1993
        },
        {
            args: [
                [
                    [1950, 1961],
                    [1960, 1971],
                    [1970, 1981]
                ]
            ],
            res: 1960
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumPopulation(...args)).toStrictEqual(res);
        });
    }
});
