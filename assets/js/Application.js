import Vector2 from "./Library/Math/Vector2.js";
import Vector3 from "./Library/Math/Vector3.js";
import Vector4 from "./Library/Math/Vector4.js";
import Matrix2 from "./Library/Math/Matrix2.js";
import Matrix3 from "./Library/Math/Matrix3.js";
import Matrix4 from "./Library/Math/Matrix4.js";


export default class Application {

    constructor() {

        //Testing of vector classes
        console.log("-----------------------------Vector2------------------------------------");
        const v1 = new Vector2(10, 41);
        const v2 = new Vector2(14, 40);
        console.log("Add: v1 + v2 ");
        console.log(v1.add(v2));
        console.log("Sub: v1 - v2 ");
        console.log(v1.sub(v2));
        console.log("scale: v1 * ");
        console.log(v1.scalar(2));
        console.log("Norm: Length of vector");
        console.log(v1.norm());
        console.log("Dot Product");
        console.log(v1.dotProduct(v2));

        console.log("-----------------------------Vector3------------------------------------");
        const v3 = new Vector3(10, 41, 5);
        const v4 = new Vector3(14, 40, 2);
        console.log("Add: v3 + v4 ");
        console.log(v3.add(v4));
        console.log("Sub: v3 - v4 ");
        console.log(v3.sub(v4));
        console.log("scale: v3 * 2 ");
        console.log(v3.scalar(2));
        console.log("Norm: Length of vector");
        console.log(v3.norm());
        console.log("Dot Product");
        console.log(v3.dotProduct(v4));

        console.log("-----------------------------Vector4------------------------------------");
        const v5 = new Vector4(10, 41, 5, 1);
        const v6 = new Vector4(14, 40, 2, 4);
        console.log("Add: v5 + v6 ");
        console.log(v5.add(v6));
        console.log("Sub: v5 - v6 ");
        console.log(v5.sub(v6));
        console.log("scale: v5 * 2 ");
        console.log(v5.scalar(2));
        console.log("Norm: Length of vector");
        console.log(v5.norm());
        console.log("Dot Product");
        console.log(v5.dotProduct(v6));







        //Testing of Matrix classes
        console.log("-----------------------------Matrix2------------------------------------");
        const m1 = new Matrix2([4, 1, 5, 2]);
        const m2 = new Matrix2([2, 8, 6, 2]);

        console.log("add: m1 + m2")
        m1.add(m2);

        console.log("sub: m1 - m2")
        m1.sub(m2);

        console.log("mul: m1 * m2")
        m1.mul(m2);





        console.log("-----------------------------Matrix3------------------------------------");
        const m3 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m4 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])

        console.log("add: m3 + m4")
        m3.add(m4);

        console.log("sub: m3 - m4")
        m3.sub(m4);

        console.log("mul: m3 * m4")
        m3.mul(m4);

        console.log("-----------------------------Matrix4------------------------------------");
        const m5 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m6 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

        console.log("add: m5 + m6")
        m5.add(m6);

        console.log("sub: m5 - m6")
        m5.sub(m6);

        console.log("mul: m5 * m6")
        m5.mul(m6);
    }



}