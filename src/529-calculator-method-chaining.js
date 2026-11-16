class Calculator {
    constructor(value) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @returns {Calculator}
     */
    add(value) {
        return new Calculator(this.result + value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        return new Calculator(this.result - value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        return new Calculator(this.result * value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw new Error("Division by zero is not allowed");
        return new Calculator(this.result / value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        return new Calculator(this.result ** value);
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

module.exports = { Calculator };

const obj = new Calculator(10);
console.log(obj);
console.log(obj.add(5).subtract(7).getResult());
