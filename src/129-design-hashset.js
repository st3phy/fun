class MyHashSet {
    constructor() {
        // 0 <= key <= 10^6 so create 1000 empty buckets
        // Each bucket is an array that will hold keys which "collide"
        // (mapped to the same index via the hash function)
        this.numOfBuckets = 1000;
        this.buckets = Array.from({ length: this.numOfBuckets }, () => []);
    }

    // Map any key (0 to 10^6) down to a bucket index (0 to 999)
    _hash(key) {
        return key % this.numOfBuckets;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        // Figure out which bucket this key belongs to
        const bucket = this.buckets[this._hash(key)];

        // Only add key if it's not already in the bucket (sets have no duplicates)
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        // Figure out which bucket index this key belongs to
        const index = this._hash(key);

        // Override that bucket with a new array that excludes the key
        this.buckets[index] = this.buckets[index].filter(k => k !== key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    contains(key) {
        // Figure out which bucket this key belongs to
        const bucket = this.buckets[this._hash(key)];

        // Scan the bucket array fro the key
        return bucket.includes(key);
    }
}

module.exports = { MyHashSet };

var obj = new MyHashSet();
obj.add(1);
obj.add(2);
console.log(obj);
obj.remove(2);
console.log(obj);
var param_3 = obj.contains(2);
console.log(param_3);
