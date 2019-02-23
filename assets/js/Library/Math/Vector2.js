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

        return this;
    }
    /**
     * Subtraction
     * @param {Vector2} v
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    /**
     * Scalar
     * @param {Number} a
     */
    scalar(a) {
        this.x *= a;
        this.y *= a;
        return this;
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
        let dotProductValue = this.x * v.x + this.y * v.y;
        return dotProductValue;
    }
}