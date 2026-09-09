class Foo {
    constructor() {
        this.firstDone = new Promise(resolve => {
            this.resolveFirst = resolve;
        });

        this.secondDone = new Promise(resolve => {
            this.resolveSecond = resolve;
        });
    }

    first(printFirst) {
        printFirst();
        // Signal first is complete
        this.resolveFirst();
    }

    second(printSecond) {
        this.firstDone.then(() => {
            printSecond();
            // Signal second is complete
            this.resolveSecond();
        });
    }

    third(printThird) {
        this.secondDone.then(() => {
            printThird();
        });
    }
}

const foo = new Foo();
foo.second(() => console.log("second"));
foo.third(() => console.log("third"));
foo.first(() => console.log("first"));
