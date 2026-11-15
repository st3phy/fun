var MyQueue = class {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.inStack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
};

module.exports = { MyQueue };

// Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
console.log(obj);
var param_2 = obj.pop();
console.log(param_2);
console.log(obj);
var param_3 = obj.peek();
console.log(param_3);
var param_4 = obj.empty();
console.log(param_4);
