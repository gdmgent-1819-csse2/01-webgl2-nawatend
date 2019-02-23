export default class Matrix4 {
    constructor(points) {
        this.points = points || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    /**
     * 
     * @param {Matrix4} m 
     */
    add(m) {

        let a = this.points;

        for (let i = 0; i < a.length; i++) {
            a[i] += m.points[i];
        }

        this.points = a;

        console.log(this.points);
    }

    /**
     * 
     * @param {Matrix4} m 
     */
    sub(m) {
        const a = this.points;

        for (let i = 0; i < a.length; i++) {

            a[i] -= m.points[i];
        }

        this.points = a;
        console.log(this.points);
    }

    /**
     * 
     * @param {Matrix4} m 
     */
    mul(m) {
        const a = this.points;
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const n = 4;

        for (var k = 0; k <= 12; k += n) {
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