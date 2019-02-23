export default class Vector4 {

    /**
     * Represents a two-dimensional vector
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @param {Number} i
     */
    constructor(x, y, z, i) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
        this.i = Number(i) || 0;
    }

    /**
     * Addition
     * @param {Vector4} v
     */
    add(v) {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.i += v.i;
        return this;
    }
    /**
     * Subtraction
     * @param {Vector4} v
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.i -= v.i;
        return this;
    }

    /**
     * Scalar
     * @param {Number} a
     */
    scalar(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.i *= a;
        return this;
    }

    /**
     * length of the vector
     */
    norm() {
        let norm = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.i * this.i);
        return norm;
    }

    /** 
     * Dot Product
     * @param {Vector4} v
     */

    dotProduct(v) {


        return this.x * v.x + this.y * v.y + this.z * v.z + this.i * v.i;
    }
}