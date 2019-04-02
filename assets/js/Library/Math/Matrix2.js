export default class Matrix2 {
    constructor(points) {
        this.points = points || [0, 0, 0, 0]
    }

    /**
     * 
     * @param {Matrix2} m 
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
     * @param {Matrix2} m 
     */
    sub(m) {
        const a = this.points;

        for (let i = 0; i < 4; i++) {

            a[i] -= m.points[i];
        }

        this.points = a;
        console.log(this.points);

    }

    /**
     * 
     * @param {Matrix2} m 
     */
    mulByMatrix2(m) {
        const a = this.points;
        const c = []
        c[0] = a[0] * m.points[0] + a[1] * m.points[3];
        c[1] = a[0] * m.points[1] + a[1] * m.points[3];
        c[2] = a[2] * m.points[0] + a[3] * m.points[2];
        c[3] = a[2] * m.points[1] + a[3] * m.points[3];

        this.points = c;
        console.log(this.points);
    }

    /**
     * 
     * @param {Array} mPoints 
     */
    mulByPoints(mPoints) {
        const a = this.points;
        const c = [];
        c[0] = a[0] * mPoints[0] + a[1] * mPoints[2];
        c[1] = a[0] * mPoints[1] + a[1] * mPoints[3];
        c[2] = a[2] * mPoints[0] + a[3] * mPoints[2];
        c[3] = a[2] * mPoints[1] + a[3] * mPoints[3];

        this.points = c;
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} degree - The anticlockwise angle in degrees.
     */
    rot(degree) {
        degree *= Math.PI / 180
        const cos = Math.cos(degree)
        const sin = Math.sin(degree)
        const points = this.points
        const rotattionMatrix = [
            cos, -sin,
            sin, cos,
        ]
        this.points = rotattionMatrix
        this.mulByPoints(points)
    }
}