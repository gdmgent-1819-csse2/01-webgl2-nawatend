export default class Vector3 {

    /**
     * Represents a two-dimensional vector
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * 
     */
    constructor(x, y, z) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;

    }

    /**
     * Addition
     * @param {Vector4} v
     */
    add(v) {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

    }
    /**
     * Subtraction
     * @param {Vector4} v
     */
    subt(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;


    }

    /**
     * Scalar
     * @param {Number} a
     */
    scalar(a) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;


    }

    /**
     * length of the vector
     */
    norm() {
        let norm = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return norm;
    }

    /** 
     * Dot Product
     * @param {Vector4} v
     */

    dotProduct(v) {


        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
}