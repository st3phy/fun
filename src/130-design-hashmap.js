class MyHashMap {
    constructor() {
        // Create 1000 arrays that will have 1000 [key, value] pairs each, to reach the 10^6 possible values
        this.numBuckets = 1000;
        this.buckets = Array.from({ length: this.numBuckets }, () => []);
    }

    /**
     *
     * @param {number} key
     * @returns {number}
     */
    _hash(key) {
        // Map any key (0 to 10^6) to a bucket index (0 to 999)
        return key % this.numBuckets;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Chech in which bucket this key blongs to
        const bucket = this.buckets[this._hash(key)];

        // If key already exists, update its value instead of adding a duplicate
        const pair = bucket.find(p => p[0] === key);
        if (pair) {
            pair[1] = value;
        } else {
            bucket.push([key, value]);
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const bucket = this.buckets[this._hash(key)];

        // Find the pair whose first element matches the key
        const pair = bucket.find(p => p[0] === key);

        // If key exists, return value, otherwise return -1
        return pair !== undefined ? pair[1] : -1;
    }

    /**
     *
     * @param {number} key
     */
    remove(key) {
        const idx = this._hash(key);

        // Filter out the pair whose first element matches the key
        this.buckets[idx] = this.buckets[idx].filter(p => p[0] !== key);
    }
}

module.exports = { MyHashMap };

var obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
console.log(obj.get(3));
obj.put(2, 1);
console.log(obj.get(2));
obj.remove(2);
console.log(obj.get(2));
