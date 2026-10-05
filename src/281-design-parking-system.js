/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = class {
    constructor(big, medium, small) {
        this.spaces = [0, big, medium, small];
    }

    addCar(carType) {
        if (this.spaces[carType]) {
            this.spaces[carType]--;
            return true;
        }
        return false;
    }
};

var obj = new ParkingSystem(1, 1, 0);
console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
