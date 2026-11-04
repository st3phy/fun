/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
    let first = 0;
    let second = 1;
    yield first;
    yield second;

    while (true) {
        const third = first + second;
        yield third;
        first = second;
        second = third;
    }
};

module.exports = { fibGenerator };

const gen = fibGenerator();
console.log(gen.next().value); //0
console.log(gen.next().value); //1
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //5
