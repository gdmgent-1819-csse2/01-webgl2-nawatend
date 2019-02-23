export default class Vector2 {

    /**
     * Represents a two-dimensional vector
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }

    /**
     * Addition
     * @param {Vector2} v
     */
    add(v) {


        this.x += v.x;
        this.y += v.y;

    }
    /**
     * Subtraction
     * @param {Vector2} v
     */
    subt(v) {
        this.x -= v.x;
        this.y -= v.y;

    }

    /**
     * Scalar
     * @param {Number} a
     */
    scalar(a) {
        this.x *= a;
        this.y *= a;

    }

    /**
     * length of the vector
     */
    norm() {
        let norm = Math.sqrt(this.x * this.x + this.y * this.y);
        return norm;
    }

    /** 
     * Dot Product
     * @param {Vector2} v
     */

    dotProduct(v) {


        return this.x * v.x + this.y * v.y;
    }
}