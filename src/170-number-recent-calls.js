/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
class RecentCounter {
    constructor() {
        this.pings = [];
        this.remove = 0; // pointer to how many pings are older than t - 3000 ms
    }

    /**
     * @param {number} t
     * @return {number}
     */
    ping(t) {
        this.pings.push(t);

        while (this.pings[this.remove] < t - 3000) {
            this.remove++;
        }

        return this.pings.length - this.remove;
    }
}

var obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));

module.exports = { RecentCounter };
