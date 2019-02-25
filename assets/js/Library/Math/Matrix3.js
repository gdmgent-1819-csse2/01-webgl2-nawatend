export default class Matrix3 {
    constructor(points) {
        this.points = points || [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    /**
     * 
     * @param {Matrix3} m 
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
     * @param {Matrix3} m 
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
     * @param {Matrix3} m 
     */
    mulByMatrix3(m) {
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

    /**
     * 
     * @param {Array} mPoints 
     */
    mulByPoints(mPoints) {
        const a = this.points;
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const n = 3;



        for (var k = 0; k <= 6; k += n) {
            for (var i = 0; i < n; i++) {
                for (var j = 0, bCount = 0; j < n; j++, bCount += n) {
                    result[k + i] += a[k + j % n] * mPoints[bCount + i % n];
                }
            }
        }

        this.points = result;
        console.log(this.points);

    }



    /**
     * Rotate the matrix around the origin.
     * @param {Number} degree - The anticlockwise angle in degrees.
     */
    rot(degree, axis) {

        degree *= Math.PI / 180
        const cos = Math.cos(degree)
        const sin = Math.sin(degree)
        const a = this.points
        let r = [];


        if (axis == 'x') {
            r = [
                1, 0, 0,
                0, cos, -sin,
                0, sin, cos
            ]
        } else if (axis == 'y') {
            r = [
                cos, 0, sin,
                0, 1, 0,
                -sin, 0, cos
            ]
        } else if (axis == 'z') {
            r = [
                cos, -sin, 0,
                sin, cos, 0,
                0, 0, 1
            ]
        }

        this.points = r
        this.mulByPoints(a)


    }
}