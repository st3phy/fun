/**
 * @param {number} n
 */
const OrderedStream = class {
    constructor(n) {
        this.n = n;
        this.list = [];
        this.i = 1;
    }

    insert(idKey, value) {
        this.list[idKey] = value;

        if (idKey !== this.i) {
            return [];
        }

        const result = [];

        while (this.list[this.i] !== undefined) {
            result.push(this.list[this.i]);
            this.i++;
        }

        return result;
    }
};

module.exports = { OrderedStream };

const obj = new OrderedStream(5);
console.log(obj.insert(3, "ccc"));
console.log(obj.insert(1, "aaa"));
console.log(obj.insert(2, "bbb"));
console.log(obj.insert(5, "eee"));
console.log(obj.insert(4, "ddd"));
