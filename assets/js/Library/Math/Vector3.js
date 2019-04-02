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
     * @param {Vector3} v
     */
    add(v) {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    /**
     * Subtraction
     * @param {Vector3} v
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
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

        return this;
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