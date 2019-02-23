export default class Matrix3 {
    constructor(points) {
        this.points = points || [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    add(m) {

        let a = this.points;

        for (let i = 0; i < a.length; i++) {
            a[i] += m.points[i];
        }

        this.points = a;
        console.log(this.points);

    }

    sub(m) {
        const a = this.points;


        for (let i = 0; i < a.length; i++) {

            a[i] -= m.points[i];
        }

        this.points = a;
        console.log(this.points);
    }

    mul(m) {
        const a = this.points;
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const n = 3;



        for (var k = 0; k <= 6; k += n) {
            for (var i = 0; i < n; i++) {
                for (var j = 0, bCount = 0; j < n; j++, bCount += n) {
                    result[k + i] += a[k + j % n] * m.points[bCount + i % n];
                }
            }
        }

        this.points = result;
        console.log(this.points);

    }
}