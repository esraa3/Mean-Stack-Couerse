//3.5:Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked
//on the same interface.

class Calulator {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Sum() {

        let res = this.x + this.y;
        console.log("Question 3.5: Sum is :" + res);
        return;
    }
    diff() {
        let res = Math.abs(this.x - this.y);
        console.log("Question 3.5: difference is :" + res);
        return;
    }
    multiply(x, y) {
        let res = this.x * this.y;
        console.log("Question 3.5: multiply  is :" + res);
        return;
    }
    divide(x, y) {
        if (y === 0) {
            console.log("Question 3.5: can't be divide by 0");
            return;
        }
        else {
            let res = this.x / this.y;
            console.log("Question 3.5: divide   is :" + res);
            return;
        }
    }
}
let cal1 = new Calulator(10, 10);
cal1.Sum();
let cal2 = new Calulator(50, 10);
cal2.diff();
let cal3 = new Calulator(100, 10);
cal3.divide();
let cal4 = new Calulator(1000, 10);
cal4.multiply();