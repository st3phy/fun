var MyStack = function () {
    // Queue to store stack element
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    // Add new element to queue
    this.queue.push(x);

    // Rotate previous elements behind new one
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // Front of queue acts as stack top
    return this.empty() ? null : this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    // Peek front element
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0;
};

let myStack = new MyStack();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.top()); // return 2
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False
