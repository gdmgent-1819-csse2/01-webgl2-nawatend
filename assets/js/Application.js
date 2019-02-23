import Vector2 from "./Library/Math/Vector2.js";
import Matrix2 from "./Library/Math/Matrix2.js";
import Matrix3 from "./Library/Math/Matrix3.js";
import Matrix4 from "./Library/Math/Matrix4.js";


export default class Application {

    constructor() {
        console.info("this is application");
        const v1 = new Vector2(1, 1);
        console.log(v1);

        const v2 = new Vector2(14, 40);
        console.log(v2)



        console.log(v1.norm());

        v1.add(v2);
        console.log(v1, v2)

        const m1 = new Matrix2([4, 1, 5, 2]);
        const m2 = new Matrix2([2, 8, 6, 2]);

        m1.add(m2);


        const m3 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m4 = new Matrix4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

        m3.sub(m4);


        const m5 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])
        const m6 = new Matrix3([1, 1, 1, 1, 1, 1, 1, 1, 1])

        m5.sub(m6);

    }



}