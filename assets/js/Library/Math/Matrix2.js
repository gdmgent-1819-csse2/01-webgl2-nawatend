export default class Matrix2 {
    constructor(points) {
        this.points = points || [0, 0, 0, 0]
    }

    add(m) {

        let a = this.points;
        console.log(a.length);
        console.log(a);
        for (let i = 0; i < a.length; i++) {

            a[i] += m.points[i];

        }

        this.points = a;
        console.log(a);

    }

    sub(m) {
        const a = this.points;


        for (let i = 0; i < 4; i++) {

            a[i] -= m.points[i];
        }

        this.points = a;

    }

    mul(m) {
        const a = this.points;


        a[0] = a[0] * m.points[0] + a[1] * m.points[3];
        a[1] = a[0] * m.points[1] + a[1] * m.points[3];
        a[2] = a[2] * m.points[0] + a[3] * m.points[2];
        a[3] = a[2] * m.points[1] + a[3] * m.points[3];



        this.points = a;

    }
}